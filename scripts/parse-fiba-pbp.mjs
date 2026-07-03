import fs from "node:fs";

const raw = JSON.parse(fs.readFileSync("fiba_pbp_raw.json", "utf8"));
const scorePattern = /^\d+\s-\s\d+$/;
const timePattern = /^\d{2}:\d{2}$/;

function elapsedSeconds(clock) {
  const [minutes, seconds] = clock.split(":").map(Number);
  return 600 - (minutes * 60 + seconds);
}

function formatClock(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll("\"", "\"\"")}"`;
}

const rows = [];

for (const [quarter, text] of Object.entries(raw)) {
  const lines = text
    .split(/\n/)
    .map((line) => line.replace(/\u00a0/g, " ").trim())
    .filter(Boolean);

  let index = 0;
  while (index < lines.length) {
    if (!timePattern.test(lines[index])) {
      index += 1;
      continue;
    }

    const clockRemaining = lines[index++];
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
    if (
      !description ||
      /^(START OF PERIOD|END OF PERIOD|TIMEOUT)$/.test(description) ||
      /^(IN|OUT)$/.test(description)
    ) {
      continue;
    }

    const lower = description.toLowerCase();
    const categories = [];

    if (lower.includes("defensive rebound")) {
      categories.push("defensive_rebound");
    }

    const isScore =
      lower.includes("made") &&
      !lower.includes("made the assist") &&
      (/\+\d/.test(description) ||
        /free throws? made|2ptsfg|3ptsfg|3pt .* made|2pt .* made/.test(lower));

    if (isScore) {
      categories.push("score");
    }

    if (lower.includes("offensive foul")) {
      categories.push("foul_possession_convert");
    }

    if (categories.length === 0) {
      continue;
    }

    const quarterElapsedSec = elapsedSeconds(clockRemaining);
    rows.push({
      quarter,
      clock_remaining: clockRemaining,
      quarter_elapsed_sec: quarterElapsedSec,
      quarter_elapsed: formatClock(quarterElapsedSec),
      categories: categories.join(";"),
      score,
      description,
    });
  }
}

const header = [
  "quarter",
  "clock_remaining",
  "quarter_elapsed_sec",
  "quarter_elapsed",
  "categories",
  "score",
  "description",
];

const quarterOrder = new Map(["Q1", "Q2", "Q3", "Q4"].map((quarter, index) => [quarter, index]));
rows.sort((a, b) => {
  const quarterDiff = (quarterOrder.get(a.quarter) ?? 99) - (quarterOrder.get(b.quarter) ?? 99);
  if (quarterDiff !== 0) {
    return quarterDiff;
  }
  return a.quarter_elapsed_sec - b.quarter_elapsed_sec;
});

const csv = [
  header.join(","),
  ...rows.map((row) => header.map((key) => csvCell(row[key])).join(",")),
].join("\n");

fs.writeFileSync("fiba_clip_events.csv", csv);
fs.writeFileSync("fiba_clip_events.json", JSON.stringify(rows, null, 2));

const byCategory = rows.reduce((acc, row) => {
  for (const category of row.categories.split(";")) {
    acc[category] = (acc[category] || 0) + 1;
  }
  return acc;
}, {});

console.log(JSON.stringify({ rows: rows.length, byCategory }, null, 2));
