"use client";

import Link from "next/link";
import { useState } from "react";
import { stegaClean } from "@sanity/client/stega";
import { ArrowDown01Icon, ArrowRight01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { buttonVariants } from "@/components/ui/button";
import type { HOME_PAGE_QUERY_RESULT } from "@/sanity.types";
import type { SanityData } from "@/sanity/lib/types";

type AboutContent = NonNullable<SanityData<HOME_PAGE_QUERY_RESULT>["about"]>;

export function AboutSection({ content }: { content: AboutContent }) {
  const principles = content.principles ?? [];
  const [activePrinciple, setActivePrinciple] = useState(principles[0]?._key);
  const ctaHref = content.cta?.href ? stegaClean(content.cta.href) : undefined;

  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <h2 className="text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
            {content.headline}
          </h2>

          <div className="flex flex-col gap-5 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            {content.body?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {ctaHref && (
            <Link
              href={ctaHref}
              className={buttonVariants({
                size: "lg",
                className:
                  "group mt-2 w-full gap-2.5 rounded-none px-7 text-base font-medium sm:w-fit",
              })}
            >
              <span>{content.cta?.label}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={1.5} />
              </span>
            </Link>
          )}
        </div>

        <div className="flex flex-col border border-border bg-card p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Core Principles
            </h3>
          </div>

          <div className="flex flex-col divide-y divide-border border border-border">
            {principles.map((principle) => {
              const isActive = principle._key === activePrinciple;
              return (
                <button
                  key={principle._key}
                  type="button"
                  onClick={() => setActivePrinciple(principle._key)}
                  aria-expanded={isActive}
                  className={`group flex cursor-pointer flex-col p-5 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-foreground ${
                    isActive
                      ? "bg-foreground text-background"
                      : "bg-transparent text-foreground hover:bg-muted/60"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-lg font-medium tracking-[-0.02em]">
                      {principle.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "text-background/70"
                          : "text-muted-foreground group-hover:translate-x-0.5 group-hover:text-foreground"
                      }`}
                    >
                      <HugeiconsIcon
                        icon={isActive ? ArrowDown01Icon : ArrowRight01Icon}
                        size={18}
                        strokeWidth={1.5}
                      />
                    </span>
                  </span>
                  <span
                    className={`mt-1 block text-base ${
                      isActive ? "text-background/80" : "text-muted-foreground"
                    }`}
                  >
                    {principle.summary}
                  </span>
                  <span
                    className={`block transition-all duration-300 ease-out ${
                      isActive ? "pt-3 opacity-100" : "h-0 opacity-0"
                    }`}
                  >
                    <span
                      aria-hidden={!isActive}
                      className={`block h-40 text-base leading-6 sm:h-24 ${
                        isActive
                          ? "text-background/75"
                          : "invisible pointer-events-none text-transparent"
                      }`}
                    >
                      {principle.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
