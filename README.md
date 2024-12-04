# AdventOfCode-TS

Project template for Advent of Code challenges

### Get started

First thing, use the template feature to build this into a new repository.

Run `npm i` to install dependencies, there isn't many.

### Generating files for a year

Use the `npm run generate` command followed by a year to generate files for a given year.
eg.

```bash
npm run generate 2023
```

This will generate a `year` folder containing a set of `day` folders that each contain the files for writing a solution for each `part` of the problem for a day.

### Running solutions

When you're ready to test out your solutions, you can use the script

```bash
npm run aoc
```

to run any year, day, or part of a problem that you want.  
To specify which solutions to run, use the command line flags

| flag   | alias | description                                          |
| ------ | ----- | ---------------------------------------------------- |
| --year | -y    | Solution year, runs all solutions in the given year. |
| --day  | -d    | Solution day, requires year.                         |
| --part | -p    | Solution part, 1 or 2, requires day and year.        |

#### Examples

Run all solutions for 2023

```bash
npm run aoc -- --year 2023
```

Run all solutions for 2023, day 4

```bash
npm run aoc -- -y 2023 -d 4
```

Run the solution for 2023, day 7, part 2

```bash
npm run aoc -- -y 2023 --day 7 --part 2
```

---

### Testing

Test files are also generated so you can use the examples easily to test your code.  
Start tests using `npm test`.

---

### Alternative method to run solutions (old)

After running `npm run generate 2023`  
Replace the contents of `./src/index.ts` with something like the example code below  
Then use `npm start` to run the index file.

---

A year

```js
// solutions for the whole 2023 year
import { run2023 } from "./2023";

run2023();
```

A single day

```js
// solutions for day 4 of 2023
import { day_04 } from "./2023/04";

day_04();
```

A single problem

```js
// 2023, day 3, part 1
import { part1 } from "./2023/03/part_1";

console.log(part1());
```

---

### Utils

Theres also a few utility methods that I wrote as I went through AoC in 2022, things like finding the max value in an array or the manhattan distance between two points. There's nothing there that will solve problems for you, just do simple things that are annoying. It's not well documented and are use at your own peril, although they [worked for me previously](https://github.com/neon-inkblast/advent-of-code-2022-TS).  
Good luck!
