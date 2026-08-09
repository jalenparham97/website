import type { Metadata } from "next";
import { cacheTag } from "next/cache";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import { WorkPage } from "@/components/pages/work/work-page";
import { sanityTags } from "@/sanity/lib/cache-tags";
import {
  getDynamicFetchOptions,
  sanityFetch,
  sanityFetchMetadata,
  type DynamicFetchOptions,
} from "@/sanity/lib/live";
import { WORK_PAGE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const { perspective, variant } = await getDynamicFetchOptions();
  const { data } = await sanityFetchMetadata({
    query: WORK_PAGE_QUERY,
    perspective,
    variant,
    tag: sanityTags.work,
  });

  return {
    title: data?.seo?.title,
    description: data?.seo?.description,
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function WorkRoute() {
  const { isEnabled } = await draftMode();

  if (isEnabled) {
    return (
      <Suspense fallback={null}>
        <DynamicWorkRoute />
      </Suspense>
    );
  }

  return <CachedWorkRoute perspective="published" stega={false} />;
}

async function DynamicWorkRoute() {
  const options = await getDynamicFetchOptions();

  return <CachedWorkRoute {...options} />;
}

async function CachedWorkRoute({ perspective, variant, stega }: DynamicFetchOptions) {
  "use cache";
  cacheTag(sanityTags.work);
  const { data } = await sanityFetch({
    query: WORK_PAGE_QUERY,
    perspective,
    variant,
    stega,
  });

  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <WorkPage data={data!} />
      </div>
    </main>
  );
}
