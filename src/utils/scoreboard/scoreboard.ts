import chalk from "chalk";
import convert from "color-convert";
import prettyMilliseconds from "pretty-ms";
import { ordinal, pad, padLeft } from "../string.js";
import apiData from "./api2023.json" assert { type: "json" };

parseLeaderboard();

type ScoreRecord = {
  stars: number;
  local_score: number;
  last_star_ts: number;
  name: string;
};
function starSort(a: ScoreRecord, b: ScoreRecord) {
  if (a.stars !== b.stars) {
    return b.stars - a.stars;
  }
  return a.last_star_ts - b.last_star_ts;
}
function scoreSort(a: ScoreRecord, b: ScoreRecord) {
  if (a.local_score === b.local_score) {
    return starSort(a, b);
  }
  return b.local_score - a.local_score;
}

function parseLeaderboard() {
  let maxStar = 0;
  let colourChunk = 0;
  console.log(
    chalk.white(
      pad("Score", { width: 6, side: "right" }),
      pad("Stars", { width: 6, side: "right" }),
      pad("Name", { width: 20, side: "right" }),
      pad("Time of last star", { width: 20, side: "right" }),
      pad("  Time since last star", { width: 30, side: "right" }),
    ),
  );
  (Object.values(apiData.members) as ScoreRecord[])
    .filter((member) => member.stars > 0)
    .sort(scoreSort)
    .forEach((member) => {
      if (!maxStar) {
        maxStar = member.stars;
        colourChunk = Math.floor(360 / maxStar);
      }
      const date = new Date(member.last_star_ts * 1000);
      const dateString = `Dec. ${ordinal(date.getDate())} - ${padLeft(
        date.getHours(),
        2,
        "0",
      )}:${padLeft(date.getMinutes(), 2, "0")}:${padLeft(date.getSeconds(), 2, "0")}`;
      const timeString =
        "- " + prettyMilliseconds(Date.now() - member.last_star_ts * 1000) + " ago.";
      const color = convert.hsv.rgb([colourChunk * (member.stars - 1), 80, 100]);
      console.log(
        chalk.rgb(...color)(
          pad(member.local_score.toString(), { width: 6, side: "right" }),
          pad(member.stars.toString(), { width: 6, side: "right" }),
          pad(member.name!.slice(0, 19), { width: 20, side: "right" }),
          pad(dateString, { width: 20, side: "right" }),
          pad(timeString, { width: 30, side: "right" }),
        ),
      );
    });
}
