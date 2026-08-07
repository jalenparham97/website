import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "k2yb8t20",
    dataset: "production",
  },
  typegen: {
    path: "src/**/*.{ts,tsx}",
    schema: "schema.json",
    generates: "src/sanity.types.ts",
  },
});
