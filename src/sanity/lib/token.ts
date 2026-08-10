import { env } from "@/env";

export const token = env.SANITY_API_READ_TOKEN;

if (!token && process.env.NODE_ENV !== "production") {
  console.warn("Missing SANITY_API_READ_TOKEN - draft mode and live preview will not work");
}
