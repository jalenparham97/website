import type { Metadata } from "next";
import { AboutStory } from "@/components/pages/about/about-story";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({ query: ABOUT_PAGE_QUERY, stega: false });

  return {
    title: data?.seo?.title,
    description: data?.seo?.description,
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function AboutPage() {
  const { data } = await sanityFetch({ query: ABOUT_PAGE_QUERY });

  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <AboutStory data={data!} />
      </div>
    </main>
  );
}
