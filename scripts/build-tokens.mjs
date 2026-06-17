import StyleDictionary from "style-dictionary";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

// Build light mode tokens (primitives + default + light)
const lightSd = new StyleDictionary({
  source: [
    `${rootDir}/tokens/primitives.json`,
    `${rootDir}/tokens/default.json`,
    `${rootDir}/tokens/light.json`,
  ],
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

// Build dark mode tokens (only dark semantic tokens)
const darkSd = new StyleDictionary({
  source: [
    `${rootDir}/tokens/dark.json`,
  ],
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
