import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/sanity/presentation/resolve";
import { documentActions } from "./src/sanity/document-actions";
import { aboutPage } from "./src/sanity/schema-types/documents/about-page";
import { contactPage } from "./src/sanity/schema-types/documents/contact-page";
import { homePage } from "./src/sanity/schema-types/documents/home-page";
import { project } from "./src/sanity/schema-types/documents/project";
import { servicesPage } from "./src/sanity/schema-types/documents/services-page";
import { workPage } from "./src/sanity/schema-types/documents/work-page";
import { link } from "./src/sanity/schema-types/objects/link";
import { seo } from "./src/sanity/schema-types/objects/seo";
import { structure } from "./src/sanity/structure";

const singletonTypes = new Set([
  "aboutPage",
  "contactPage",
  "homePage",
  "servicesPage",
  "workPage",
]);

export default defineConfig({
  name: "default",
  title: "Personal Website",
  basePath: "/studio",

  projectId: "k2yb8t20",
  dataset: "production",

  plugins: [
    structureTool({ structure }),
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

  document: {
    actions: documentActions,
    newDocumentOptions: (previousTemplates) =>
      previousTemplates.filter((template) => !singletonTypes.has(template.templateId)),
  },

  schema: {
    types: [aboutPage, contactPage, homePage, project, servicesPage, workPage, link, seo],
  },
});
