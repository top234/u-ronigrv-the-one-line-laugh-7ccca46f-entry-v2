import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I asked my smart speaker to play something relaxing, and it started reading out my bank statements.";

// The gate allows one sentence of 1–200 characters: refuse loudly
// rather than write an entry the judge can never score.
if (
  line.length < 1 ||
  line.length > 200 ||
  line.trim() !== line ||
  line.split(".").length !== 2
) {
  throw new Error("entry line must be one sentence of 1-200 characters");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
