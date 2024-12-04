import { PRETTY, print, printYearHeader } from "../utils/index.js";
import { day_01 } from "./01/index.js";
import { day_02 } from "./02/index.js";
import { day_03 } from "./03/index.js";
import { day_04 } from "./04/index.js";
import { day_05 } from "./05/index.js";
import { day_06 } from "./06/index.js";
import { day_07 } from "./07/index.js";
import { day_08 } from "./08/index.js";
import { day_09 } from "./09/index.js";
import { day_10 } from "./10/index.js";
import { day_11 } from "./11/index.js";
import { day_12 } from "./12/index.js";
import { day_13 } from "./13/index.js";
import { day_14 } from "./14/index.js";
import { day_15 } from "./15/index.js";
import { day_16 } from "./16/index.js";
import { day_17 } from "./17/index.js";
import { day_18 } from "./18/index.js";
import { day_19 } from "./19/index.js";
import { day_20 } from "./20/index.js";
import { day_21 } from "./21/index.js";
import { day_22 } from "./22/index.js";
import { day_23 } from "./23/index.js";
import { day_24 } from "./24/index.js";
import { day_25 } from "./25/index.js";

export const daysYYYY = {
  day_01,
  day_02,
  day_03,
  day_04,
  day_05,
  day_06,
  day_07,
  day_08,
  day_09,
  day_10,
  day_11,
  day_12,
  day_13,
  day_14,
  day_15,
  day_16,
  day_17,
  day_18,
  day_19,
  day_20,
  day_21,
  day_22,
  day_23,
  day_24,
  day_25,
};

export function runYYYY() {
  const run = Object.values(daysYYYY);

  printYearHeader("YYYY");
  print(PRETTY.EMPTY);
  print(PRETTY.XMAS);
  print(PRETTY.EMPTY);

  run.forEach((day, index) => {
    if (index === 0) {
      print(PRETTY.BORDER_TOP);
      print(PRETTY.EMPTY);
    }

    day();

    if (index !== run.length - 1) {
      print(PRETTY.EMPTY);
      print(PRETTY.BORDER_MID);
      print(PRETTY.EMPTY);
    } else {
      print(PRETTY.EMPTY);
      print(PRETTY.BORDER_BTM);
    }
  });

  print(PRETTY.EMPTY);
  print(PRETTY.XMAS);
  print(PRETTY.EMPTY);
}
