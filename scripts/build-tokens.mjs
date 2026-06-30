import StyleDictionary from "style-dictionary";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

function loadTokens(filePath) {
  const raw = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return convertDtcgToSd(raw);
}

function convertDtcgToSd(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj.$value !== undefined) {
    return { value: obj.$value };
  }
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key === "$type" || key === "$description") continue;
    if (typeof value === "object" && value !== null) {
      result[key] = convertDtcgToSd(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

const tokenFiles = ["primitives.json", "typography.json", "sizes.json"];

async function buildTheme(name, themeFile, selector) {
  const data = {};
  for (const file of tokenFiles) {
    Object.assign(data, loadTokens(`${rootDir}/tokens/${file}`));
  }
  Object.assign(data, loadTokens(`${rootDir}/tokens/${themeFile}`));

  const sd = new StyleDictionary({
    tokens: data,
    platforms: {
      css: {
        transformGroup: "css",
        buildPath: `${rootDir}/src/tokens/`,
        files: [
          {
            destination: `tokens-${name}.css`,
            format: "css/variables",
            options: {
              selector,
              outputReferences: true,
            },
          },
        ],
      },
    },
  });

  await sd.buildAllPlatforms();
  console.log(`Build complete: src/tokens/tokens-${name}.css`);
}

async function main() {
  await buildTheme("light", "light.json", ":root");
  await buildTheme("dark", "dark.json", '[data-theme="dark"]');
}

await main();
