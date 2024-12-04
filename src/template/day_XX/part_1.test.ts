import { describe, expect, test } from "vitest";
import { part1 } from "./part_1.js";

describe("day XX - part 1", () => {
  test("calculates the right answer!", () => {
    const input = ["1", "2", "3"];
    const result = part1(input);
    expect(result).toBe("1");
  });
});
