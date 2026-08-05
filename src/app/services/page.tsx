import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services/services-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Services | Jalen Parham",
  description:
    "Web design, website development, and content management for small businesses and independent people.",
};

export default function ServicesRoute() {
  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <SiteHeader />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <ServicesPage />
        <SiteFooter />
      </div>
    </main>
  );
}
