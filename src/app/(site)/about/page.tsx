import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import { AboutStory } from "@/components/pages/about/about-story";
import {
  getDynamicFetchOptions,
  sanityFetch,
  sanityFetchMetadata,
  type DynamicFetchOptions,
} from "@/sanity/lib/live";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const { perspective, variant } = await getDynamicFetchOptions();
  const { data } = await sanityFetchMetadata({
    query: ABOUT_PAGE_QUERY,
    perspective,
    variant,
  });

  return {
    title: data?.seo?.title,
    description: data?.seo?.description,
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function AboutPage() {
  const { isEnabled } = await draftMode();

  if (isEnabled) {
    return (
      <Suspense fallback={null}>
        <DynamicAboutPage />
      </Suspense>
    );
  }

  return <CachedAboutPage perspective="published" stega={false} />;
}

async function DynamicAboutPage() {
  const options = await getDynamicFetchOptions();

  return <CachedAboutPage {...options} />;
}

async function CachedAboutPage({ perspective, variant, stega }: DynamicFetchOptions) {
  "use cache";
  const { data } = await sanityFetch({
    query: ABOUT_PAGE_QUERY,
    perspective,
    variant,
    stega,
  });

  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <AboutStory data={data!} />
      </div>
    </main>
  );
}
