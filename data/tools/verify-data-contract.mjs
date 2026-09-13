import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const dataRoot = resolve(import.meta.dirname, "..");
const readJson = async (relativePath) => JSON.parse(
  await readFile(resolve(dataRoot, relativePath), "utf8"),
);

const lock = await readJson("pokemon-showdown.lock.json");
const manifest = await readJson("normalized/gen5-bw-ou.manifest.json");

if (lock.schemaVersion !== 1 || !/^[0-9a-f]{40}$/.test(lock.source?.commit ?? "")) {
  throw new Error("The Pokémon Showdown lock must contain a full Git commit SHA.");
}

if (lock.target?.generation !== 5 || lock.target?.format !== "gen5ou") {
  throw new Error("The data lock must target Generation 5 BW OU.");
}

if (manifest.schemaVersion !== 1 || !manifest.dataVersion.includes(lock.source.commit)) {
  throw new Error("The normalized-data manifest must identify the pinned source commit.");
}

console.log(`Verified ${manifest.dataVersion}`);
