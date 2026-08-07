import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import { ContactPage } from "@/components/pages/contact/contact-page";
import {
  getDynamicFetchOptions,
  sanityFetch,
  sanityFetchMetadata,
  type DynamicFetchOptions,
} from "@/sanity/lib/live";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const { perspective, variant } = await getDynamicFetchOptions();
  const { data } = await sanityFetchMetadata({
    query: CONTACT_PAGE_QUERY,
    perspective,
    variant,
  });

  return {
    title: data?.seo?.title,
    description: data?.seo?.description,
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function ContactRoute() {
  const { isEnabled } = await draftMode();

  if (isEnabled) {
    return (
      <Suspense fallback={null}>
        <DynamicContactRoute />
      </Suspense>
    );
  }

  return <CachedContactRoute perspective="published" stega={false} />;
}

async function DynamicContactRoute() {
  const options = await getDynamicFetchOptions();

  return <CachedContactRoute {...options} />;
}

async function CachedContactRoute({ perspective, variant, stega }: DynamicFetchOptions) {
  "use cache";
  const { data } = await sanityFetch({
    query: CONTACT_PAGE_QUERY,
    perspective,
    variant,
    stega,
  });

  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <ContactPage data={data!} />
      </div>
    </main>
  );
}
