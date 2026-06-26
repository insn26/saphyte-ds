import StyleDictionary from "style-dictionary";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

// Convert nested tokens to DTCG format with { value: "..." }
function toDTCG(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      // Check if this is a leaf value (has $value or value)
      if (value.value !== undefined || value.$value !== undefined) {
        result[key] = { value: value.value || value.$value };
      } else {
        result[key] = toDTCG(value);
      }
    } else {
      result[key] = { value: String(value) };
    }
  }
  return result;
}

function loadAndConvert(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return toDTCG(data);
}

// Build light mode tokens
const lightData = {
  ...loadAndConvert(`${rootDir}/tokens/primitives.json`),
  ...loadAndConvert(`${rootDir}/tokens/typography.json`),
  ...loadAndConvert(`${rootDir}/tokens/default.json`),
  ...loadAndConvert(`${rootDir}/tokens/light.json`),
};

const lightSd = new StyleDictionary({
  tokens: lightData,
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: `${rootDir}/src/tokens/`,
      files: [
        {
          destination: "tokens-light.css",
          format: "css/variables",
          options: {
            selector: ":root",
            outputReferences: true,
          },
        },
      ],
    },
  },
});

await lightSd.buildAllPlatforms();
console.log("Build complete: src/tokens/tokens-light.css");

// Build dark mode tokens
const darkData = {
  ...loadAndConvert(`${rootDir}/tokens/primitives.json`),
  ...loadAndConvert(`${rootDir}/tokens/typography.json`),
  ...loadAndConvert(`${rootDir}/tokens/default.json`),
  ...loadAndConvert(`${rootDir}/tokens/dark.json`),
};

const darkSd = new StyleDictionary({
  tokens: darkData,
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: `${rootDir}/src/tokens/`,
      files: [
        {
          destination: "tokens-dark.css",
          format: "css/variables",
          options: {
            selector: '[data-theme="dark"]',
            outputReferences: true,
          },
        },
      ],
    },
  },
});

await darkSd.buildAllPlatforms();
console.log("Build complete: src/tokens/tokens-dark.css");
