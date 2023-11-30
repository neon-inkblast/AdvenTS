# AdventOfCode-TS

Project template for Advent of Code challenges

### Get started

First thing, after using the template feature to build this into a new repository...
Run `npm i` to install dependencies, there isn't many.

Use the `npm run generate` command followed by a year to generate files for a given year.
eg.

```bash
npm run generate 2023
```

When that's finished, modify the file found at `./src/index.ts` to run any `year`, `day`, or `part` (see examples below) then 
run `npm start` to execute your solutions.  
There is also a watch mode, which is handy when actively working on them, useable with `npm run watch`.


Examples: After running `npm run generate 2023`

---

A year
```js
// solutions for the whole 2023 year
import { run2023 } from "./2023";

run2023();
```


A single Day
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

