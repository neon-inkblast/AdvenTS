import chalk from "chalk";
import { print } from "../../utils/console.js";
import { timeExec } from "../../utils/perf.js";
import { part1 } from "./part_1.js";
import { part2 } from "./part_2.js";

export function day_XX() {
  const color = +"XX" % 2 === 0 ? chalk.greenBright : chalk.redBright;
  print(color(`  Day XX - Part 1: ${timeExec(part1)}`));
  print(color(`  Day XX - Part 2: ${timeExec(part2)}`));
}
