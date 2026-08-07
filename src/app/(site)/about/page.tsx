import type { Metadata } from "next";
import { AboutStory } from "@/components/pages/about/about-story";

export const metadata: Metadata = {
  title: "About | Jalen Parham",
  description:
    "Learn about Jalen Parham's background in software engineering, design philosophy, and direct client collaboration.",
};

export default function AboutPage() {
  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <AboutStory />
      </div>
    </main>
  );
}
