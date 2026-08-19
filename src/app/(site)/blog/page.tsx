import type { Metadata } from "next";
import { cacheTag } from "next/cache";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import { BlogPage } from "@/components/pages/blog/blog-page";
import { sanityTags } from "@/sanity/lib/cache-tags";
import {
  getDynamicFetchOptions,
  sanityFetch,
  sanityFetchMetadata,
  type DynamicFetchOptions,
} from "@/sanity/lib/live";
import { BLOG_PAGE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const { perspective, variant } = await getDynamicFetchOptions();
  const { data } = await sanityFetchMetadata({
    query: BLOG_PAGE_QUERY,
    perspective,
    variant,
    tag: sanityTags.blog,
  });

  return {
    title: data?.page?.seo?.title || data?.page?.title || "Blog",
    description: data?.page?.seo?.description || data?.page?.intro?.description,
    robots: data?.page?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function BlogRoute() {
  const { isEnabled } = await draftMode();

  if (isEnabled) {
    return (
      <Suspense fallback={null}>
        <DynamicBlogRoute />
      </Suspense>
    );
  }

  return <CachedBlogRoute perspective="published" stega={false} />;
}

async function DynamicBlogRoute() {
  const options = await getDynamicFetchOptions();

  return <CachedBlogRoute {...options} />;
}

async function CachedBlogRoute({ perspective, variant, stega }: DynamicFetchOptions) {
  "use cache";
  cacheTag(sanityTags.blog);
  const { data } = await sanityFetch({
    query: BLOG_PAGE_QUERY,
    perspective,
    variant,
    stega,
  });

  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <BlogPage data={data!} />
      </div>
    </main>
  );
}
