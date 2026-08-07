import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/sanity/presentation/resolve";
import { homePage } from "./src/sanity/schema-types/documents/home-page";
import { project } from "./src/sanity/schema-types/documents/project";
import { link } from "./src/sanity/schema-types/objects/link";
import { seo } from "./src/sanity/schema-types/objects/seo";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  name: "default",
  title: "Personal Website",
  basePath: "/studio",

  projectId: "k2yb8t20",
  dataset: "production",

  plugins: [
    structureTool({ structure }),
    visionTool(),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
  ],

  schema: {
    types: [homePage, project, link, seo],
  },
});
