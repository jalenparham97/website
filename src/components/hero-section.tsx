"use client";

import { ArrowRight01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { buttonVariants } from "@/components/ui/button";

export function OriginalHeroSection() {
  return (
    <section className="flex flex-col justify-center py-24 sm:py-32 lg:min-h-[calc(100svh-5rem)] lg:py-28">
      <div className="max-w-5xl">
        <h1 className="text-[clamp(2.75rem,7.5vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
          Software engineer and freelance web developer.
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
          I&apos;m Jalen. I design and build carefully made websites for people and small businesses
          who want their work to feel clear and a little more human online.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            className={buttonVariants({
              size: "lg",
              className: "rounded-none",
            })}
            href="#contact"
          >
            Let&apos;s talk
          </a>
          <a
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "rounded-none",
            })}
            href="#portfolio"
          >
            View my work
          </a>
        </div>
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <section className="flex flex-col justify-center py-20 sm:py-28 lg:min-h-[calc(100svh-5rem)] lg:py-24">
      <div className="w-full">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="w-full text-[clamp(2.5rem,6.5vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-foreground">
              Web developer & software engineer crafting websites that connect and endure.
            </h1>

            <p className="max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
              I help founders, creators, and growing businesses build clean websites with clear
              design, useful messaging, and effortless management.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className={buttonVariants({
                size: "lg",
                className: "group gap-2.5 rounded-none px-7 text-base font-medium",
              })}
              href="#contact"
            >
              <span>Let&apos;s work together</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.5} />
              </span>
            </a>
            <a
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "group gap-2.5 rounded-none px-7 text-base font-medium",
              })}
              href="#portfolio"
            >
              <span>Explore recent work</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={1.5} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
