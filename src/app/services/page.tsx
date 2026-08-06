import type { Metadata } from "next";
// Commercial packages-led layout (default).
// Revert to previous version:
// import { ServicesPage } from "@/components/pages/services/services-page.classic";
import { ServicesPage } from "@/components/pages/services/services-page";

export const metadata: Metadata = {
  title: "Services | Jalen Parham",
  description:
    "Web design, website development, and content management for small businesses and independent people.",
};

export default function ServicesRoute() {
  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <ServicesPage />
      </div>
    </main>
  );
}
