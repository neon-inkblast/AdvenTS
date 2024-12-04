import path from "path";
import { fileURLToPath } from "url";
import { readInputFromFile } from "../../utils/io.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function part2(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  return lines[0];
}
