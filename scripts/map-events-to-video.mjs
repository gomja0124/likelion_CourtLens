import fs from "node:fs";

const events = JSON.parse(fs.readFileSync("fiba_clip_events.json", "utf8"));
const sampleCsv = fs.readFileSync("video_clock_samples.csv", "utf8");
const beforeSeconds = 5;
const afterSeconds = 7;
const toleranceSeconds = 2;

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (quoted) {
      if (char === "\"" && next === "\"") {
        cell += "\"";
        index += 1;
      } else if (char === "\"") {
        quoted = false;
      } else {
        cell += char;
      }
      continue;
    }

    if (char === "\"") {
      quoted = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (char !== "\r") {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  const [header, ...body] = rows;
  return body.map((values) => Object.fromEntries(header.map((key, index) => [key, values[index] ?? ""])));
}

function clockToSeconds(clock) {
  const [minutes, seconds] = clock.split(":").map(Number);
  return minutes * 60 + seconds;
}

function formatSeconds(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll("\"", "\"\"")}"`;
}

const samplesByQuarter = new Map();
for (const sample of parseCsv(sampleCsv)) {
  const normalizedQuarter = sample.quarter.replace(/^(\d)Q$/, "Q$1");
  const quarterSamples = samplesByQuarter.get(normalizedQuarter) ?? [];
  quarterSamples.push({
    quarter: normalizedQuarter,
    video_sec: Number(sample.video_sec),
    clock: sample.clock,
    clock_sec: clockToSeconds(sample.clock),
    raw_text: sample.raw_text,
  });
  samplesByQuarter.set(normalizedQuarter, quarterSamples);
}

for (const samples of samplesByQuarter.values()) {
  samples.sort((a, b) => a.video_sec - b.video_sec);
}

const lastVideoSecondByQuarter = new Map();
const rows = events.map((event, index) => {
  const targetClockSec = clockToSeconds(event.clock_remaining);
  const samples = samplesByQuarter.get(event.quarter) ?? [];
  const minVideoSecond = lastVideoSecondByQuarter.get(event.quarter) ?? 0;
  const candidates = samples
    .filter((sample) => sample.video_sec >= minVideoSecond)
    .map((sample) => ({
      ...sample,
      delta: Math.abs(sample.clock_sec - targetClockSec),
    }))
    .filter((sample) => sample.delta <= toleranceSeconds)
    .sort((a, b) => a.delta - b.delta || a.video_sec - b.video_sec);

  const match = candidates[0];
  if (match) {
    lastVideoSecondByQuarter.set(event.quarter, match.video_sec);
  }

  const clipStart = match ? Math.max(0, match.video_sec - beforeSeconds) : "";
  const clipEnd = match ? match.video_sec + afterSeconds : "";

  return {
    event_id: index + 1,
    source_video: `영상자료/${event.quarter.replace(/^Q(\d)$/, "$1Q")}.mov`,
    matched: match ? "yes" : "no",
    match_delta_clock_sec: match?.delta ?? "",
    video_sec: match?.video_sec ?? "",
    video_time: match ? formatSeconds(match.video_sec) : "",
    clip_start_sec: clipStart,
    clip_start: match ? formatSeconds(clipStart) : "",
    clip_end_sec: clipEnd,
    clip_end: match ? formatSeconds(clipEnd) : "",
    ...event,
  };
});

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
  "match_delta_clock_sec",
  "quarter",
  "clock_remaining",
  "quarter_elapsed_sec",
  "quarter_elapsed",
  "categories",
  "score",
  "description",
];

const csv = [
  header.join(","),
  ...rows.map((row) => header.map((key) => csvCell(row[key])).join(",")),
].join("\n");

fs.writeFileSync("clip_plan.csv", csv);
fs.writeFileSync("clip_plan.json", JSON.stringify(rows, null, 2));

const summary = rows.reduce(
  (acc, row) => {
    acc.total += 1;
    acc[row.matched === "yes" ? "matched" : "unmatched"] += 1;
    return acc;
  },
  { total: 0, matched: 0, unmatched: 0 },
);

console.log(JSON.stringify(summary, null, 2));
