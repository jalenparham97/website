import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({
    query: HOME_PAGE_QUERY,
    stega: false,
  });

  return {
    title: data?.seo?.title,
    description: data?.seo?.description,
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function Home() {
  const { data } = await sanityFetch({
    query: HOME_PAGE_QUERY,
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
