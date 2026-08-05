import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About | Jalen Parham",
  description:
    "Jalen Parham is a software engineer and independent web developer building clear, carefully made websites.",
};

export default function AboutPage() {
  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <SiteHeader />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <section className="max-w-3xl py-16 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">About</p>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-foreground">
            Hi, I&apos;m Jalen.
          </h1>

          <div className="mt-8 flex flex-col gap-5 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            <p>
              I&apos;m a software engineer and independent web developer. I design and build
              websites for founders, creators, and small businesses.
            </p>
            <p>
              I care about clear pages, simple choices, and the small details that make a site feel
              calm and easy to trust. When you work with me, you work directly with the person
              designing and building it.
            </p>
            <p>
              If you&apos;re working on something that matters,{" "}
              <a
                href="/#contact"
                className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                get in touch
              </a>
              .
            </p>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
