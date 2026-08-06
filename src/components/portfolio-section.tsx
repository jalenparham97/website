import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/projects";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="border-t border-border py-20 sm:py-28">
      <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            Recent Work
          </h2>
          <p className="text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8">
            A few websites I have designed and built to help businesses communicate clearly and make
            a lasting impression.
          </p>
        </div>
        <Link
          href="/work"
          className="group inline-flex shrink-0 items-center gap-2 text-base font-medium text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground"
        >
          View all work
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={18}
            strokeWidth={1.8}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
          />
        </Link>
      </div>

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} featured />
        ))}
      </div>
    </section>
  );
}
