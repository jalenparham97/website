import type { ReactNode } from "react";
import { Suspense } from "react";
import { draftMode } from "next/headers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VisualEditingControls } from "@/components/visual-editing-controls";
import { SanityLive } from "@/sanity/lib/live";

export default async function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <SiteFooter />
      </div>
      <Suspense fallback={null}>
        <LivePreview />
      </Suspense>
    </>
  );
}

async function LivePreview() {
  const { isEnabled } = await draftMode();

  return (
    <>
      <SanityLive includeDrafts={isEnabled} />
      {isEnabled && <VisualEditingControls />}
    </>
  );
}
