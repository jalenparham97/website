import type { Metadata } from "next";
import { cacheTag } from "next/cache";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import { ServicesPage } from "@/components/pages/services/services-page";
import { sanityTags } from "@/sanity/lib/cache-tags";
import {
  getDynamicFetchOptions,
  sanityFetch,
  sanityFetchMetadata,
  type DynamicFetchOptions,
} from "@/sanity/lib/live";
import { SERVICES_PAGE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const { perspective, variant } = await getDynamicFetchOptions();
  const { data } = await sanityFetchMetadata({
    query: SERVICES_PAGE_QUERY,
    perspective,
    variant,
    tag: sanityTags.services,
  });

  return {
    title: data?.seo?.title,
    description: data?.seo?.description,
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function ServicesRoute() {
  const { isEnabled } = await draftMode();

  if (isEnabled) {
    return (
      <Suspense fallback={null}>
        <DynamicServicesRoute />
      </Suspense>
    );
  }

  return <CachedServicesRoute perspective="published" stega={false} />;
}

async function DynamicServicesRoute() {
  const options = await getDynamicFetchOptions();

  return <CachedServicesRoute {...options} />;
}

async function CachedServicesRoute({ perspective, variant, stega }: DynamicFetchOptions) {
  "use cache";
  cacheTag(sanityTags.services);
  const { data } = await sanityFetch({
    query: SERVICES_PAGE_QUERY,
    perspective,
    variant,
    stega,
  });

  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <ServicesPage data={data!} />
      </div>
    </main>
  );
}
