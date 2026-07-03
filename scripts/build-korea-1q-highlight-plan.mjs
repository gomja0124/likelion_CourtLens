import fs from "node:fs";

const events = JSON.parse(fs.readFileSync("clip_plan.json", "utf8"))
  .filter((event) => event.quarter === "Q1")
  .sort((a, b) => Number(a.quarter_elapsed_sec) - Number(b.quarter_elapsed_sec));

const koreaPlayers = [
  "Jun Seok Yeo",
  "Junyong Choi",
  "Jaeseok Jang",
  "Woosuk Lee",
  "Junghyun Lee",
  "Jeonghyeon Moon",
  "Kisang Yu",
  "Junhyeong Byeon",
  "Jihoon Park",
  "Seounghyun Lee",
];

const taipeiPlayers = [
  "Brandon Gilbeck",
  "Benson Lin",
  "Long-Mao Hu",
  "Ying-Chun Chen",
  "Chun Hsiang Lu",
  "Riven Ma",
  "Bachir Gadiaga",
  "Ai-Che Yu",
  "Chia-Kang Li",
];

function includesAny(text, names) {
  return names.some((name) => text.includes(name));
}

function formatSeconds(totalSeconds) {
  return `${String(Math.floor(totalSeconds / 60)).padStart(2, "0")}:${String(totalSeconds % 60).padStart(2, "0")}`;
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll("\"", "\"\"")}"`;
}

function isMatched(event) {
  return event.matched === "yes" && event.video_sec !== "";
}

function isKoreaScore(event) {
  return event.categories.includes("score") && includesAny(event.description, koreaPlayers);
}

function isTaipeiScore(event) {
  return event.categories.includes("score") && includesAny(event.description, taipeiPlayers);
}

function isKoreaDefensiveRebound(event) {
  if (!event.categories.includes("defensive_rebound")) {
    return false;
  }
  return event.description.includes("team defensive rebound") || includesAny(event.description, koreaPlayers);
}

function isTaipeiDefensiveRebound(event) {
  return event.categories.includes("defensive_rebound") && includesAny(event.description, taipeiPlayers);
}

function isTaipeiOffensiveFoul(event) {
  return event.categories.includes("foul_possession_convert") && includesAny(event.description, taipeiPlayers);
}

let pendingStart = null;
const highlights = [];

for (const event of events) {
  if (isKoreaDefensiveRebound(event) || isTaipeiOffensiveFoul(event)) {
    pendingStart = isMatched(event)
      ? {
          event,
          reason: isKoreaDefensiveRebound(event) ? "korea_defensive_rebound" : "taipei_offensive_foul",
        }
      : null;
    continue;
  }

  if (isTaipeiDefensiveRebound(event) || isTaipeiScore(event)) {
    pendingStart = null;
    continue;
  }

  if (!pendingStart || !isKoreaScore(event) || !isMatched(event)) {
    continue;
  }

  const startEvent = pendingStart.event;
  const clipStartSec = Math.max(0, Number(startEvent.video_sec) - 2);
  const clipEndSec = Number(event.video_sec) + 5;
  const durationSec = clipEndSec - clipStartSec;

  if (durationSec > 0) {
    highlights.push({
      event_id: highlights.length + 1,
      matched: "yes",
      source_video: startEvent.source_video,
      video_sec: startEvent.video_sec,
      video_time: formatSeconds(Number(startEvent.video_sec)),
      clip_start_sec: clipStartSec,
      clip_start: formatSeconds(clipStartSec),
      clip_end_sec: clipEndSec,
      clip_end: formatSeconds(clipEndSec),
      quarter: "Q1",
      clock_remaining: `${startEvent.clock_remaining}_to_${event.clock_remaining}`,
      categories: `korea_highlight_${pendingStart.reason}_to_score`,
      duration_sec: durationSec,
      start_event_id: startEvent.event_id,
      score_event_id: event.event_id,
      score: event.score,
      start_description: startEvent.description,
      score_description: event.description,
    });
  }

  pendingStart = null;
}

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
  "start_event_id",
  "score_event_id",
  "score",
  "start_description",
  "score_description",
];

const csv = [
  header.join(","),
  ...highlights.map((row) => header.map((key) => csvCell(row[key])).join(",")),
].join("\n");

fs.writeFileSync("korea_1q_highlight_plan.json", JSON.stringify(highlights, null, 2));
fs.writeFileSync("korea_1q_highlight_plan.csv", csv);

console.log(JSON.stringify({ total: highlights.length, highlights }, null, 2));
