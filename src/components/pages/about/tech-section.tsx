"use client";

import { useState } from "react";
import { stegaClean } from "@sanity/client/stega";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ABOUT_PAGE_QUERY_RESULT } from "@/sanity.types";
import type { SanityData } from "@/sanity/lib/types";

type TechContent = NonNullable<SanityData<ABOUT_PAGE_QUERY_RESULT>["tech"]>;
type TechCategory = "development" | "hardware" | "apps" | "gaming" | "ai";

const categories: Array<{ label: string; value: TechCategory }> = [
  { label: "Development", value: "development" },
  { label: "Hardware", value: "hardware" },
  { label: "Apps", value: "apps" },
  { label: "AI", value: "ai" },
  { label: "Gaming", value: "gaming" },
];

export function TechSection({ content }: { content: TechContent }) {
  const items = content.items ?? [];
  const firstCategory = categories.find(({ value }) =>
    items.some((item) => stegaClean(item.category) === value),
  )?.value;
  const [activeCategory, setActiveCategory] = useState<TechCategory>(
    firstCategory ?? "development",
  );
  const selectedCategory = items.some((item) => stegaClean(item.category) === activeCategory)
    ? activeCategory
    : (firstCategory ?? "development");
  const visibleItems = items.filter((item) => stegaClean(item.category) === selectedCategory);

  return (
    <section className="mx-auto mt-16 max-w-3xl border-t border-border pt-8 sm:mt-24 sm:pt-12">
      <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
        {content.headline}
      </h2>
      {content.intro && (
        <p className="mt-3 max-w-[36em] text-base leading-7 text-muted-foreground sm:mt-4 sm:text-lg sm:leading-8">
          {content.intro}
        </p>
      )}

      <div
        role="group"
        aria-label="Filter technology by category"
        className="mt-6 flex flex-wrap gap-2 sm:mt-8"
      >
        {categories.map((category) => {
          const hasItems = items.some((item) => stegaClean(item.category) === category.value);
          const isActive = selectedCategory === category.value;

          return (
            <button
              key={category.value}
              type="button"
              aria-pressed={isActive}
              disabled={!hasItems}
              onClick={() => setActiveCategory(category.value)}
              className={`min-h-9 rounded-none border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-10 sm:px-4 sm:py-2 ${
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        aria-live="polite"
        className="mt-5 divide-y divide-border border-t border-border sm:mt-6"
      >
        {visibleItems.map((item) => {
          const url = item.url ? stegaClean(item.url) : undefined;
          const itemContent = (
            <>
              <span className="text-base font-medium tracking-[-0.02em] text-foreground sm:text-xl">
                {item.name}
              </span>
              <span className="col-span-full text-sm leading-6 text-muted-foreground sm:col-span-1 sm:text-base sm:leading-7">
                {item.description}
              </span>
              {url && (
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={18}
                  strokeWidth={1.6}
                  className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                />
              )}
            </>
          );

          return url ? (
            <a
              key={item._key}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1.5 py-4 outline-none focus-visible:ring-2 focus-visible:ring-ring sm:grid-cols-[minmax(8rem,0.65fr)_minmax(0,1.35fr)_auto] sm:items-start sm:gap-6 sm:gap-y-2 sm:py-5"
            >
              {itemContent}
            </a>
          ) : (
            <div
              key={item._key}
              className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1.5 py-4 sm:grid-cols-[minmax(8rem,0.65fr)_minmax(0,1.35fr)_auto] sm:items-start sm:gap-6 sm:gap-y-2 sm:py-5"
            >
              {itemContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
