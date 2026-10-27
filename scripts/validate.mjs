// Checks every skill folder: a SKILL.md with frontmatter (name = folder name, a description of 40 to 1024 characters), and the house
// style: no formal "u" and no comma before "en". Runs in GitHub Actions; exits 1 on the first list of problems.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const skip = new Set(["scripts", "node_modules", ".git", ".github"]);
const problems = [];

const folders = readdirSync(root).filter((f) => !f.startsWith(".") && !skip.has(f) && statSync(join(root, f)).isDirectory());
if (folders.length === 0) problems.push("no skill folders found");

for (const folder of folders) {
  const file = join(root, folder, "SKILL.md");
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    problems.push(`${folder}: SKILL.md is missing`);
    continue;
  }
  const front = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(text);
  if (!front) {
    problems.push(`${folder}: no frontmatter`);
    continue;
  }
  const name = /^name:\s*(.+)$/m.exec(front[1])?.[1].trim();
  const description = /^description:\s*(.+)$/m.exec(front[1])?.[1].trim() ?? "";
  if (name !== folder) problems.push(`${folder}: name is "${name}", expected "${folder}"`);
  if (description.length < 40 || description.length > 1024) problems.push(`${folder}: description is ${description.length} characters (40 to 1024)`);
  const body = text.slice(front[0].length);
  if (/\b[Uu] (bent|kunt|wilt|heeft|moet|krijgt)\b|\buw\b/.test(body)) problems.push(`${folder}: uses the formal "u"; write "je"`);
  if (/, en\b/.test(body.replace(/`[^`]*`/g, ""))) problems.push(`${folder}: comma before "en"`);
}

if (problems.length) {
  console.error(problems.map((p) => `- ${p}`).join("\n"));
  process.exit(1);
}
console.log(`${folders.length} skills ok`);
