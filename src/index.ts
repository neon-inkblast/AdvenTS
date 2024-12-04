import chalk from "chalk";
import { print, PRETTY } from "./utils/index.js";

print(PRETTY.HEADER);
print(chalk.red("Get Started!"));
print("To get started, run the `npm run generate` command followed");
print("by a year");
print(`eg. ${chalk.yellow(`npm run generate 2023`)}`);

print(PRETTY.EMPTY);
print(`after that, you can use the command ${chalk.yellow(`npm run aoc`)}`);
print("to run any year, day, or partial day");
print(
  `with ${chalk.yellow(`--year (-y)`)}, ${chalk.yellow(`--day (-d)`)}, or ${chalk.yellow(`--part (-p)`)} flags`,
);

print(PRETTY.EMPTY);
print(chalk.red("Examples"));
print(PRETTY.BORDER_DIV);
print(PRETTY.EMPTY);
print(chalk.green(`// run all solutions for the year 2023`));
print(PRETTY.EMPTY);
print(chalk.blueBright(`npm run aoc -- --year 2023`));

print(PRETTY.EMPTY);
print(PRETTY.BORDER_DIV);
print(PRETTY.EMPTY);
print(chalk.green(`// run day 4 solutions from 2023`));
print(PRETTY.EMPTY);
print(chalk.blueBright(`npm run aoc -- -y 2023 -d 4`));

print(PRETTY.EMPTY);
print(PRETTY.BORDER_DIV);
print(PRETTY.EMPTY);
print(chalk.green(`// run the part 1 solution for day 3 from 2023`));
print(PRETTY.EMPTY);
print(chalk.blueBright(`npm run aoc -- --year 2023 -d 4 --part 1`));

print(PRETTY.EMPTY);
print(PRETTY.BORDER_DIV);
print(PRETTY.EMPTY);
print(chalk.red("Testing"));
print(`Run the generated test suite using ${chalk.yellow(`npm run test`)}`);
print(`It's pretty worthwhile to use the examples given in the puzzle`);
print(`as test cases when the problems get harder`);
