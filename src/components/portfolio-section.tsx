import Link from "next/link";
import { stegaClean } from "@sanity/client/stega";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ProjectCard } from "@/components/project-card";
import { buttonVariants } from "@/components/ui/button";
import type { HOME_PAGE_QUERY_RESULT } from "@/sanity.types";
import type { SanityData } from "@/sanity/lib/types";

type PortfolioContent = NonNullable<SanityData<HOME_PAGE_QUERY_RESULT>["portfolio"]>;

export function PortfolioSection({ content }: { content: PortfolioContent }) {
  const projects = content.featuredProjects ?? [];
  const ctaHref = content.cta?.href ? stegaClean(content.cta.href) : undefined;

  return (
    <section id="portfolio" className="border-t border-border py-20 sm:py-28">
      <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            {content.headline}
          </h2>
          <p className="text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8">
            {content.intro}
          </p>
        </div>
        {ctaHref && (
          <Link
            href={ctaHref}
            className={buttonVariants({
              size: "lg",
              className:
                "group w-full shrink-0 gap-2.5 rounded-none px-7 text-base font-medium sm:w-auto",
            })}
          >
            <span>{content.cta?.label}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 motion-reduce:transform-none">
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={1.5} />
            </span>
          </Link>
        )}
      </div>

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} featured />
        ))}
      </div>
    </section>
  );
}
