import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <SiteFooter />
      </div>
    </>
  );
}
