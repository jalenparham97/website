import type { ReactNode } from "react";
import { Suspense } from "react";
import { draftMode } from "next/headers";
import { DraftModeBanner } from "@/components/draft-mode-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VisualEditingControls } from "@/components/visual-editing-controls";
import { SanityLive } from "@/sanity/lib/live";

export default async function SiteLayout({ children }: { children: ReactNode }) {
  const { isEnabled } = await draftMode();

  return (
    <>
      {isEnabled && <DraftModeBanner />}
      <SiteHeader />
      {children}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <SiteFooter />
      </div>
      <Suspense fallback={null}>
        <LivePreview isEnabled={isEnabled} />
      </Suspense>
    </>
  );
}

async function LivePreview({ isEnabled }: { isEnabled: boolean }) {
  return (
    <>
      <SanityLive includeDrafts={isEnabled} />
      {isEnabled && <VisualEditingControls />}
    </>
  );
}
