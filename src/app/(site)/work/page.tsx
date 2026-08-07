import type { Metadata } from "next";
import { WorkPage } from "@/components/pages/work/work-page";

export const metadata: Metadata = {
  title: "My Work | Jalen Parham",
  description:
    "Selected websites designed and built by Jalen Parham — real projects first, with a clear path to start a conversation.",
};

export default function WorkRoute() {
  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <WorkPage />
      </div>
    </main>
  );
}
