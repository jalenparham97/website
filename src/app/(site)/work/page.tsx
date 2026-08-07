import type { Metadata } from "next";
import { WorkPage } from "@/components/pages/work/work-page";
import { sanityFetch } from "@/sanity/lib/live";
import { WORK_PAGE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({ query: WORK_PAGE_QUERY, stega: false });

  return {
    title: data?.seo?.title,
    description: data?.seo?.description,
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function WorkRoute() {
  const { data } = await sanityFetch({ query: WORK_PAGE_QUERY });

  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <WorkPage data={data!} />
      </div>
    </main>
  );
}
