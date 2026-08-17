"use client";

import Link from "next/link";
import { stegaClean } from "@sanity/client/stega";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { buttonVariants } from "@/components/ui/button";
import type { HOME_PAGE_QUERY_RESULT } from "@/sanity.types";
import type { SanityData } from "@/sanity/lib/types";

type ServicesContent = NonNullable<SanityData<HOME_PAGE_QUERY_RESULT>["services"]>;

export function ServicesSection({ content }: { content: ServicesContent }) {
  const items = content.items ?? [];
  const ctaLabel = content.cta?.label || "Learn more";
  const ctaHref = content.cta?.href ? stegaClean(content.cta.href) : "/services";

  return (
    <section id="services" className="border-t border-border py-20 sm:py-28">
      <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            {content.headline}
          </h2>
          <p className="max-w-2xl text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8">
            {content.intro}
          </p>
        </div>
        <Link
          href={ctaHref}
          className={buttonVariants({
            size: "lg",
            className:
              "group w-full shrink-0 gap-2.5 rounded-none px-7 text-base font-medium sm:w-auto",
          })}
        >
          <span>{ctaLabel}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 motion-reduce:transform-none">
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={1.5} />
          </span>
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        {items.map((service) => (
          <div
            key={service._key}
            className="group relative border border-border bg-card p-8 transition-all duration-300 hover:border-foreground/20 sm:p-10 lg:p-12"
          >
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base font-medium text-foreground sm:text-lg">
                    {service.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border/80 bg-background px-3 py-1 font-mono text-xs font-medium text-muted-foreground transition-colors group-hover:border-foreground/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center border-t border-border/60 pt-6 lg:border-t-0 lg:border-l lg:border-border/60 lg:pt-0 lg:pl-12">
                <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {service.detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
