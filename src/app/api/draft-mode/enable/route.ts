import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token }),
  // Required for Presentation Tool: cross-site iframe cookies need Secure + SameSite=None.
  secureDevMode: true,
});
