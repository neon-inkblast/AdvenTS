import { toNumbers } from "./array.js";

export type PadSide = "left" | "right" | "center";
export interface PadOptions {
  width?: number;
  side?: PadSide;
  token?: string;
}

export function ordinalIndicator(input: number | string) {
  const num = Math.abs(+input);
  var cent = num % 100;
  if (cent >= 10 && cent <= 20) return "th";
  var dec = num % 10;
  if (dec === 1) return "st";
  if (dec === 2) return "nd";
  if (dec === 3) return "rd";
  return "th";
}

export function ordinal(input: number | string) {
  return input + ordinalIndicator(input);
}

export function ints(input: string, includeNegatives = false): number[] {
  const result = (includeNegatives ? input.match(/-?\d+/g) : input.match(/\d+/g)) ?? [];
  return toNumbers(result);
}

export function getDigits(input: string): number[] {
  return toNumbers(input.match(/\d+/g) ?? []);
}

export function pad(input: string, { width = 10, side = "left", token = " " }: PadOptions) {
  const padFns = {
    left: padLeft,
    right: padRight,
    center: padCenter,
  };
  return padFns[side](input, width, token);
}

export function padLeft(input: string | number, width: number, token = " ") {
  const padAmount = Math.max(0, width - input.toString().length);
  const leftPad = Array(padAmount).fill(token).join("");
  return leftPad + input;
}

export function padRight(input: string | number, width: number, token = " ") {
  const padAmount = Math.max(0, width - input.toString().length);
  const rightPad = Array(padAmount).fill(token).join("");
  return input + rightPad;
}

export function padCenter(input: string, width: number, token = " ") {
  const padAmount = Math.max(0, width - input.length);
  const leftAmount = Math.floor(Math.max(0, width - input.length) / 2);
  const rightAmount = padAmount - leftAmount;

  const leftPad = Array(leftAmount).fill(token).join("");
  const rightPad = Array(rightAmount).fill(token).join("");
  return leftPad + input + rightPad;
}
