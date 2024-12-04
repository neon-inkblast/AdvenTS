import { exit } from "process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { padLeft } from "./utils/string.js";
const argv = yargs(hideBin(process.argv)).alias("year", "y").alias("day", "d").alias("part", "p")
  .argv as Record<string, any>;

const { year, day, part } = argv;
if (!year) {
  console.error("Year required: eg `npm run aoc --year 2024");
  exit(1);
}

// if no day, run the year script
if (!day) {
  try {
    const yearModule = await import(`./${year}/index.js`);
    yearModule[`run${year}`]();
    exit(0);
  } catch (err: any) {
    if (err.code === "ERR_MODULE_NOT_FOUND") {
      console.error(`Files for year ${year} not found, did you type the wrong year?`);
    } else {
      console.error(err);
    }
    exit(1);
  }
}

const padDay = padLeft(day, 2, "0");
// if year and day but not part, run the day script for that year
if (!part) {
  try {
    const dayModule = await import(`./${year}/${padDay}/index.js`);
    dayModule[`day_${padDay}`]();
    exit(0);
  } catch (err: any) {
    if (err.code === "ERR_MODULE_NOT_FOUND") {
      console.error(
        `Files for year ${year} day ${padDay} not found, did you type the wrong year or day?`,
      );
    } else {
      console.error(err);
    }
    exit(1);
  }
}

// should have year/day/part here, so try running that
try {
  const partModule = await import(`./${year}/${padDay}/part_${part}.js`);
  console.log(partModule[`part${part}`]());
  exit(0);
} catch (err: any) {
  if (err.code === "ERR_MODULE_NOT_FOUND") {
    console.error(
      `Files for year ${year} day ${padDay} part ${part} not found, did you type the wrong year, day, or part?`,
    );
  } else {
    console.error(err);
  }
  exit(1);
}
