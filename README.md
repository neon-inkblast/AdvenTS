# AdventOfCode-TS

Project template for Advent of Code challenges

### Get started

First thing, obvio, `npm i`.

then run the `npm run generate` command followed by a year.  
eg.

```bash
npm run generate 2022
```

After that, modify the file found at `./src/index.ts` to run any `year`, `day`, or `part`

Example: After running `npm run generate 2022`
change the index.ts file content to something like...

---

```js
import { run2022 } from "./2022";

run2022();
```

or

```js
import { day_04 } from "./2022/04";

day_04();
```

or

```js
import { part1 } from "./2022/02/part_1";
// day 2 part 1
part1();
```

---

### Testing

Test files are also generated so you can use the examples easily to test your code.  
Start tests using `npm test`.  
Delicious TDD...
