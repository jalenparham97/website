import Link from "next/link";
import { stegaClean } from "@sanity/client/stega";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ABOUT_PAGE_QUERY_RESULT } from "@/sanity.types";
import { PortableText } from "@/sanity/lib/portable-text";
import type { SanityData } from "@/sanity/lib/types";
import { AboutPersonalSections } from "./about-personal-sections";
import { TechSection } from "./tech-section";

export function AboutStory({ data }: { data: SanityData<ABOUT_PAGE_QUERY_RESULT> }) {
  const story = data.story;
  const cta = data.cta;
  const href = cta?.link?.href ? stegaClean(cta.link.href) : undefined;

  return (
    <article className="mx-auto max-w-5xl py-14 sm:py-20 lg:py-24">
      <header className="mx-auto max-w-3xl">
        <h1 className="max-w-3xl text-balance text-[clamp(2.75rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-foreground">
          {story?.headline}
        </h1>
        {story?.body && (
          <div className="typeset typeset-story mt-10 max-w-[36em] tracking-[-0.01em]">
            <PortableText value={story.body} />
          </div>
        )}
      </header>

      {data.tech?.items?.length ? <TechSection content={data.tech} /> : null}

      <AboutPersonalSections
        exploring={data.currentlyExploring}
        currentlyPlaying={data.currentlyPlaying}
      />

      <footer className="mx-auto mt-20 max-w-3xl border-t border-border pt-10 sm:mt-24 sm:flex sm:items-end sm:justify-between sm:gap-12 sm:pt-12">
        <div className="max-w-xl">
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
            {cta?.headline}
          </h2>
          {cta?.intro && (
            <p className="mt-4 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {cta.intro}
            </p>
          )}
        </div>
        {href && (
          <Link
            href={href}
            className="group mt-8 inline-flex items-center gap-2 text-base font-medium text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground sm:mt-0 sm:shrink-0"
          >
            {cta?.link?.label}
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={18}
              strokeWidth={1.8}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        )}
      </footer>
    </article>
  );
}
