"use client";

import Link from "next/link";
import { ArrowRight01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="flex flex-col justify-center py-20 sm:py-28 lg:min-h-[calc(100svh-5rem)] lg:py-24">
      <div className="w-full">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="w-full text-[clamp(2.5rem,6.5vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-foreground">
              Web developer & software engineer crafting websites that make an impact.
            </h1>

            <p className="max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
              I help founders, creators, and growing businesses build clean websites with clear
              design, useful messaging, and effortless management.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
            <Link
              className={buttonVariants({
                size: "lg",
                className:
                  "group h-auto! w-full gap-2.5 rounded-none px-7 py-3.5 text-base font-medium sm:w-auto sm:py-3",
              })}
              href="/contact"
            >
              <span>Let&apos;s talk</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.5} />
              </span>
            </Link>
            <Link
              className="group inline-flex w-full items-center justify-center gap-2 rounded-none border border-border bg-muted px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 dark:hover:bg-muted/80 sm:w-auto sm:py-3"
              href="/work"
            >
              <span>View my work</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
