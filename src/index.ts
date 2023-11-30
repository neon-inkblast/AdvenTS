import chalk from "chalk";
import { print, PRETTY } from "./utils";

print(PRETTY.HEADER);
print(chalk.red("Get Started!"));
print("To get started, run the `npm run generate` command followed");
print("by a year");
print(`eg. ${chalk.yellow(`npm run generate 2023`)}`);

print(PRETTY.EMPTY);
print("after that, modify this file (./src/index.ts) to run any");
print("year, day, or partial day");

print(PRETTY.EMPTY);
print(chalk.red("Examples"));
print(PRETTY.BORDER_DIV);
print(PRETTY.EMPTY);
print(chalk.green(`// run all solutions for the year 2023`));
print(PRETTY.EMPTY);
print(chalk.blueBright(`import { run2023 } from "./2023";`));
print(chalk.blueBright(`run2023();`));

print(PRETTY.EMPTY);
print(PRETTY.BORDER_DIV);
print(PRETTY.EMPTY);
print(chalk.green(`// run day 4 solutions from 2023`));
print(PRETTY.EMPTY);
print(chalk.blueBright(`import { day_04 } from "./2023/04";`));
print(chalk.blueBright(`day04();`));

print(PRETTY.EMPTY);
print(PRETTY.BORDER_DIV);
print(PRETTY.EMPTY);
print(chalk.green(`// run the part 1 solution for day 3 from 2023`));
print(PRETTY.EMPTY);
print(chalk.blueBright(`import { part1 } from "./2023/03/part_1";`));
print(chalk.blueBright(`console.log(part1());`));

print(PRETTY.EMPTY);
print(PRETTY.BORDER_DIV);
print(PRETTY.EMPTY);
print(chalk.red("Testing"));
print(`Run the generated test suite using ${chalk.yellow(`npm run test`)}`);
print(`It's pretty worthwhile to use the examples given in the puzzle`);
print(`as test cases when the problems get harder`);
