# AdventOfCode-TS

Project template for Advent of Code challenges

### Get started

First thing, use the template feature to build this into a new repository.

Run `npm i` to install dependencies, there isn't many.

Use the `npm run generate` command followed by a year to generate files for a given year.
eg.

```bash
npm run generate 2023
```

When that's finished, replace the contents of the file found at `./src/index.ts` with one of the examples (see below) to set up any `year`, `day`, or `part`.

Run `npm start` to execute your solutions.  

There is also a watch mode, which is handy when actively working on them, useable with `npm run watch`.


### Examples
After running `npm run generate 2023`

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

### Testing

Test files are also generated so you can use the examples easily to test your code.  
Start tests using `npm test`.  

--

### Utils

Theres also a few utility methods that I wrote as I went through AoC in 2022, things like finding the max value in an array or the manhattan distance between two points.  There's nothing there that will solve problems for you, just do simple things that are annoying.  It's not well documented and are use at your own peril, although they [worked for me previously](https://github.com/neon-inkblast/advent-of-code-2022-TS).  
Good luck!