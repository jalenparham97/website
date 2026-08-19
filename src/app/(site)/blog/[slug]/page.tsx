import type { Metadata } from "next";
import { cacheTag } from "next/cache";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BlogPostPage } from "@/components/pages/blog/blog-post-page";
import { sanityTags } from "@/sanity/lib/cache-tags";
import {
  getDynamicFetchOptions,
  sanityFetch,
  sanityFetchMetadata,
  type DynamicFetchOptions,
} from "@/sanity/lib/live";
import { BLOG_POST_QUERY } from "@/sanity/lib/queries";

type BlogPostRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const { perspective, variant } = await getDynamicFetchOptions();
  const { data } = await sanityFetchMetadata({
    query: BLOG_POST_QUERY,
    params: { slug },
    perspective,
    variant,
    tag: sanityTags.blogPost(slug),
  });

  return {
    title: data?.seo?.title || data?.title || "Article",
    description: data?.seo?.description || data?.excerpt,
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function BlogPostRoute({ params }: BlogPostRouteProps) {
  const { isEnabled } = await draftMode();

  if (isEnabled) {
    return (
      <Suspense fallback={null}>
        <DynamicBlogPostRoute params={params} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={null}>
      <PublishedBlogPostRoute params={params} />
    </Suspense>
  );
}

async function PublishedBlogPostRoute({ params }: BlogPostRouteProps) {
  const { slug } = await params;

  return <CachedBlogPostRoute slug={slug} perspective="published" stega={false} />;
}

async function DynamicBlogPostRoute({ params }: BlogPostRouteProps) {
  const { slug } = await params;
  const options = await getDynamicFetchOptions();

  return <CachedBlogPostRoute slug={slug} {...options} />;
}

async function CachedBlogPostRoute({
  slug,
  perspective,
  variant,
  stega,
}: DynamicFetchOptions & { slug: string }) {
  "use cache";
  cacheTag(sanityTags.blogPost(slug));
  const { data } = await sanityFetch({
    query: BLOG_POST_QUERY,
    params: { slug },
    perspective,
    variant,
    stega,
  });

  if (!data) notFound();

  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <BlogPostPage data={data} />
      </div>
    </main>
  );
}
