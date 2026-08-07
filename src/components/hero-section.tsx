"use client";

import Link from "next/link";
import { stegaClean } from "@sanity/client/stega";
import { ArrowUpRight01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { buttonVariants } from "@/components/ui/button";
import type { HOME_PAGE_QUERY_RESULT } from "@/sanity.types";
import type { SanityData } from "@/sanity/lib/types";

type HeroContent = NonNullable<SanityData<HOME_PAGE_QUERY_RESULT>["hero"]>;

export function HeroSection({ content }: { content: HeroContent }) {
  const primaryHref = content.primaryCta?.href ? stegaClean(content.primaryCta.href) : undefined;
  const secondaryHref = content.secondaryCta?.href
    ? stegaClean(content.secondaryCta.href)
    : undefined;

  return (
    <section className="flex flex-col justify-center py-20 sm:py-28 lg:min-h-[calc(100svh-5rem)] lg:py-24">
      <div className="w-full">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="w-full text-[clamp(2.5rem,6.5vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-foreground">
              {content.headline}
            </h1>

            <p className="max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
              {content.intro}
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
            {primaryHref && (
              <Link
                className={buttonVariants({
                  size: "lg",
                  className:
                    "group h-auto! w-full gap-2.5 rounded-none px-7 py-3.5 text-base font-medium sm:w-auto sm:py-3",
                })}
                href={primaryHref}
              >
                <span>{content.primaryCta?.label}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.5} />
                </span>
              </Link>
            )}
            {secondaryHref && (
              <Link
                className="group inline-flex w-full items-center justify-center gap-2 rounded-none border border-border bg-muted px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 dark:hover:bg-muted/80 sm:w-auto sm:py-3"
                href={secondaryHref}
              >
                <span>{content.secondaryCta?.label}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 motion-reduce:transform-none">
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={1.5} />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
