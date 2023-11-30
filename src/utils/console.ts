export type PrettyStrings = Record<PRETTY_TYPE, string>;
export type BORDER_TYPE =
  | "BORDER_TOP"
  | "BORDER_BTM"
  | "BORDER_MID"
  | "BORDER_DIV"
  | "BORDER_SIDES";
export type PRETTY_TYPE = "XMAS" | "EMPTY" | "HEADER" | BORDER_TYPE;

export const EMPTY = "";
export const BORDER_TOP = "╔═══════════════════════════════════════════════════════════╗";
export const BORDER_MID = "╠═══════════════════════════════════════════════════════════╣";
export const BORDER_SIDES = "║                                                           ║";
export const BORDER_BTM = "╚═══════════════════════════════════════════════════════════╝";
export const BORDER_DIV = "═════════════════════════════════════════════════════════════";
export const XMAS = "🎄🎅🎄🎅🎄🎅🎄🎅🎄🎅🎄🎅🎄🎅🎄🎅🎄🎅🎄🎅🎄🎅🎄🎅🎄🎅🎄🎅🎄🎅🎄";
export const HEADER = `
╔═[ Elf OS ]════════════════════════════════════════════════╗
║                    🎄 Advent of Code 🎄                   ║
╚═══════════════════════════════════════════════════════════╝`;

export const PRETTY: PrettyStrings = {
  XMAS,
  HEADER,
  EMPTY,
  BORDER_TOP,
  BORDER_BTM,
  BORDER_DIV,
  BORDER_MID,
  BORDER_SIDES,
};

export function printYearHeader(year: string) {
  const header = `
╔═[ Elf OS ]════════════════════════════════════════════════╗
║                 🎄 Advent of Code ${year} 🎄                 ║
╚═══════════════════════════════════════════════════════════╝`;
  console.log(header);
}
