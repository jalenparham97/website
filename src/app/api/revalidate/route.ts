import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { sanityTags } from "@/sanity/lib/cache-tags";
import { env } from "@/env";

const tagsByDocumentType: Record<string, readonly string[]> = {
  homePage: [sanityTags.home],
  aboutPage: [sanityTags.about],
  contactPage: [sanityTags.contact],
  servicesPage: [sanityTags.services],
  workPage: [sanityTags.work],
  project: [sanityTags.home, sanityTags.work],
  blogPage: [sanityTags.blog],
  blogPost: [sanityTags.blog],
};

export async function POST(request: Request) {
  if (request.headers.get("authorization") !== `Bearer ${env.SANITY_REVALIDATE_SECRET}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { _type } = (await request.json()) as { _type: string };
  const tags = tagsByDocumentType[_type] ?? [];

  for (const tag of tags) {
    revalidateTag(tag, { expire: 0 });
  }

  return NextResponse.json({ revalidated: true, tags: tags.length });
}
