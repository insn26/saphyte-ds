import StyleDictionary from "style-dictionary";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

console.log("Syncing tokens from Figma...");
console.log("NOTE: This is a placeholder. To auto-sync, you need the Figma Variables API with file_variables:read scope.");
console.log("For now, use Tokens Studio plugin in Figma to export tokens as JSON into the tokens/ directory.");
console.log("");
console.log("Steps:");
console.log("1. Open Figma → Tokens Studio plugin");
console.log("2. Select your token collections (Global, Primitive, Semantic)");
console.log("3. Export as DTCG JSON");
console.log("4. Place files in tokens/ directory");
console.log("5. Run: npm run build:tokens");
console.log("");
console.log("After exporting, run: npm run build:tokens");
