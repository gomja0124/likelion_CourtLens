import fs from "node:fs";

const quarter = process.argv[2] ?? "Q1";
const raw = JSON.parse(fs.readFileSync("data/raw/fiba_pbp_raw.json", "utf8"))[quarter];
const samplesCsv = fs.readFileSync("data/raw/video_clock_samples.csv", "utf8");

if (!raw) {
  throw new Error(`Missing play-by-play text for ${quarter}`);
}

const timePattern = /^\d{2}:\d{2}$/;
const scorePattern = /^\d+\s-\s\d+$/;
const sampleQuarter = quarter.replace(/^Q(\d)$/, "$1Q");

function clockToSeconds(clock) {
  const [minutes, seconds] = clock.split(":").map(Number);
  return minutes * 60 + seconds;
}

function formatSeconds(totalSeconds) {
  return `${String(Math.floor(totalSeconds / 60)).padStart(2, "0")}:${String(totalSeconds % 60).padStart(2, "0")}`;
}

function appendUniqueClock(existingClock, nextClock) {
  const clocks = new Set(String(existingClock || "").split("/").filter(Boolean));
  if (clocks.has(nextClock)) {
    return existingClock;
  }
  return `${existingClock}/${nextClock}`;
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll("\"", "\"\"")}"`;
}

function parseSamples(csv) {
  return csv
    .split(/\n/)
    .slice(1)
    .map((line) => {
      const match = line.match(/^"([^"]+)","(\d+)","(\d{2}:\d{2})"/);
      if (!match) {
        return null;
      }
      return {
        quarter: match[1].replace(/^(\d)Q$/, "Q$1"),
        video_sec: Number(match[2]),
        clock: match[3],
        clock_sec: clockToSeconds(match[3]),
      };
    })
    .filter((sample) => sample && sample.quarter === quarter);
}

function isScore(description) {
  const lower = description.toLowerCase();
  return (
    lower.includes("made") &&
    !lower.includes("made the assist") &&
    (/\+\d/.test(description) ||
      /free throws? made|2ptsfg|3ptsfg|3pt .* made|2pt .* made/.test(lower))
  );
}

function cutpointType(description) {
  const lower = description.toLowerCase();
  if (isScore(description)) {
    return "score";
  }
  if (lower.includes("defensive rebound")) {
    return "defensive_rebound";
  }
  if (lower.includes("turnover")) {
    return "turnover";
  }
  if (lower.includes("foul")) {
    return "foul";
  }
  return null;
}

function readEvents(text) {
  const lines = text
    .split(/\n/)
    .map((line) => line.replace(/\u00a0/g, " ").trim())
    .filter(Boolean);

  const events = [];
  let index = 0;

  while (index < lines.length) {
    if (!timePattern.test(lines[index])) {
      index += 1;
      continue;
    }

    const clock = lines[index++];
    const descriptionLines = [];

    while (
      index < lines.length &&
      !scorePattern.test(lines[index]) &&
      !timePattern.test(lines[index])
    ) {
      descriptionLines.push(lines[index++]);
    }

    const score = scorePattern.test(lines[index] || "") ? lines[index++] : "";
    const description = descriptionLines.join(" | ");
    if (!description) {
      continue;
    }

    const type = cutpointType(description);
    if (type) {
      events.push({ clock, score, description, type });
    }
  }

  return events;
}

function matchVideoSecond(clock, samples) {
  const exact = samples.find((sample) => sample.clock === clock);
  if (exact) {
    return exact.video_sec;
  }

  const target = clockToSeconds(clock);
  let best = null;
  let bestDelta = Infinity;
  for (const sample of samples) {
    const delta = Math.abs(sample.clock_sec - target);
    if (delta < bestDelta) {
      best = sample;
      bestDelta = delta;
    }
  }

  return best && bestDelta <= 2 ? best.video_sec : null;
}

const samples = parseSamples(samplesCsv);
const cutpoints = readEvents(raw)
  .map((event) => ({
    ...event,
    video_sec: matchVideoSecond(event.clock, samples),
  }))
  .filter((event) => event.video_sec !== null)
  .sort((a, b) => a.video_sec - b.video_sec);

const mergedCutpoints = [];
for (const cutpoint of cutpoints) {
  const previous = mergedCutpoints.at(-1);
  if (previous && Math.abs(previous.video_sec - cutpoint.video_sec) <= 1) {
    previous.type = previous.type === cutpoint.type ? previous.type : `${previous.type};${cutpoint.type}`;
    previous.description = `${previous.description} / ${cutpoint.description}`;
    previous.clock = appendUniqueClock(previous.clock, cutpoint.clock);
    continue;
  }
  mergedCutpoints.push({ ...cutpoint });
}

const segments = [];
for (let index = 0; index < mergedCutpoints.length - 1; index += 1) {
  const start = mergedCutpoints[index];
  const end = mergedCutpoints[index + 1];
  const durationSec = end.video_sec - start.video_sec;
  if (durationSec < 2) {
    continue;
  }

  segments.push({
    event_id: segments.length + 1,
    matched: "yes",
    source_video: `media/source/${sampleQuarter}.mov`,
    video_sec: start.video_sec,
    video_time: formatSeconds(start.video_sec),
    clip_start_sec: start.video_sec,
    clip_start: formatSeconds(start.video_sec),
    clip_end_sec: end.video_sec,
    clip_end: formatSeconds(end.video_sec),
    quarter,
    clock_remaining: `${start.clock}_to_${end.clock}`,
    categories: `${quarter.toLowerCase()}_cutpoint_segment`,
    duration_sec: durationSec,
    start_type: start.type,
    end_type: end.type,
    start_description: start.description,
    end_description: end.description,
  });
}

const baseName = `${quarter.toLowerCase()}_cutpoint_segments_plan`;
const outputBase = `data/highlights/${baseName}`;
fs.writeFileSync(`${outputBase}.json`, JSON.stringify(segments, null, 2));

const header = [
  "event_id",
  "matched",
  "source_video",
  "video_sec",
  "video_time",
  "clip_start_sec",
  "clip_start",
  "clip_end_sec",
  "clip_end",
  "quarter",
  "clock_remaining",
  "categories",
  "duration_sec",
  "start_type",
  "end_type",
  "start_description",
  "end_description",
];

fs.writeFileSync(
  `${outputBase}.csv`,
  [header.join(","), ...segments.map((row) => header.map((key) => csvCell(row[key])).join(","))].join("\n"),
);

console.log(
  JSON.stringify(
    {
      quarter,
      cutpoints: mergedCutpoints.length,
      segments: segments.length,
      totalDurationSec: segments.reduce((sum, segment) => sum + segment.duration_sec, 0),
      output: `${outputBase}.json`,
    },
    null,
    2,
  ),
);
