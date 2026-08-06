import type { SchemaTypeDefinition } from "sanity";
import { homePage } from "./documents/homePage";
import { project } from "./documents/project";
import { link } from "./objects/link";
import { seo } from "./objects/seo";

export const schemaTypes: SchemaTypeDefinition[] = [homePage, project, link, seo];
