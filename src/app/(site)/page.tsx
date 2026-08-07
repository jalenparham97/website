import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import {
  getDynamicFetchOptions,
  sanityFetch,
  sanityFetchMetadata,
  type DynamicFetchOptions,
} from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const { perspective, variant } = await getDynamicFetchOptions();
  const { data } = await sanityFetchMetadata({
    query: HOME_PAGE_QUERY,
    perspective,
    variant,
  });

  return {
    title: data?.seo?.title,
    description: data?.seo?.description,
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function Home() {
  const { isEnabled } = await draftMode();

  if (isEnabled) {
    return (
      <Suspense fallback={null}>
        <DynamicHome />
      </Suspense>
    );
  }

  return <CachedHome perspective="published" stega={false} />;
}

async function DynamicHome() {
  const options = await getDynamicFetchOptions();

  return <CachedHome {...options} />;
}

async function CachedHome({ perspective, variant, stega }: DynamicFetchOptions) {
  "use cache";
  const { data } = await sanityFetch({
    query: HOME_PAGE_QUERY,
    perspective,
    variant,
    stega,
  });
  const page = data!;

  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        {page.hero && <HeroSection content={page.hero} />}
        {page.about && <AboutSection content={page.about} />}
        {page.services && <ServicesSection content={page.services} />}
        {page.portfolio && <PortfolioSection content={page.portfolio} />}
        {page.contact && <ContactSection content={page.contact} />}
      </div>
    </main>
  );
}
