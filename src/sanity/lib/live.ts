import { cacheTag } from "next/cache";
import { cookies, draftMode } from "next/headers";
import {
  defineLive,
  resolvePerspectiveFromCookies,
  resolveVariantFromCookies,
  type LivePerspective,
} from "next-sanity/live";
import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: "2026-02-01",
  }),
  serverToken: token,
  browserToken: token,
  strict: true,
});

export interface DynamicFetchOptions {
  perspective: LivePerspective;
  variant?: string;
  stega: boolean;
}

export async function getDynamicFetchOptions(): Promise<DynamicFetchOptions> {
  const { isEnabled: isDraftMode } = await draftMode();

  if (!isDraftMode) {
    return { perspective: "published", stega: false };
  }

  const cookieStore = await cookies();
  const perspective = await resolvePerspectiveFromCookies({ cookies: cookieStore });
  const variant = await resolveVariantFromCookies({ cookies: cookieStore });

  return { perspective: perspective ?? "drafts", variant, stega: true };
}

export async function sanityFetchMetadata<const QueryString extends string>({
  query,
  params,
  perspective,
  variant,
  tag,
}: {
  query: QueryString;
  params?: Record<string, unknown>;
  perspective: LivePerspective;
  variant?: string;
  tag: string;
}) {
  "use cache";
  cacheTag(tag);

  return sanityFetch({ query, params, perspective, variant, stega: false });
}
