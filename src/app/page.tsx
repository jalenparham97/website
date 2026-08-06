import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { mapHomePage } from "@/lib/home-page";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import type { HomePageData } from "@/sanity/lib/types";

async function getHomePage() {
  const { data } = await sanityFetch({
    query: HOME_PAGE_QUERY,
  });

  return mapHomePage(data as HomePageData | null);
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({
    query: HOME_PAGE_QUERY,
    stega: false,
  });

  const homePage = mapHomePage(data as HomePageData | null);

  return {
    title: homePage.seo.title,
    description: homePage.seo.description,
    robots: homePage.seo.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function Home() {
  const homePage = await getHomePage();

  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <HeroSection content={homePage.hero} />
        <AboutSection content={homePage.about} />
        <ServicesSection content={homePage.services} />
        <PortfolioSection content={homePage.portfolio} />
        <ContactSection content={homePage.contact} />
      </div>
    </main>
  );
}
