import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I asked my smart speaker to play something relaxing, and it started reading out my bank statements.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
