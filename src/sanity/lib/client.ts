import { createClient } from "next-sanity";
import { env } from "@/env";

export const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = "2026-02-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: {
    studioUrl: env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});
