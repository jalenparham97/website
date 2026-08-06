import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/projects";

/**
 * My Work — image-led gallery wall.
 * THESIS: The work leads from the first viewport; copy and contact support it.
 * Structure seed: image-led wall (candidate 3), key 9debc815.
 */
export function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl py-14 sm:py-20 lg:py-24">
      <header className="max-w-3xl">
        <h1 className="max-w-3xl text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground sm:text-5xl sm:leading-[1.06] sm:tracking-[-0.04em] lg:text-[3.75rem] lg:leading-[1.05]">
          Work I&apos;m proud to share.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
          I am inspired by creating great work with people who are as passionate as I am about
          building something awesome.
        </p>
      </header>

      <section aria-labelledby="selected-work" className="mt-10 sm:mt-12">
        <h2 id="selected-work" className="sr-only">
          Selected work
        </h2>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} featured />
          ))}
        </div>
      </section>

      <footer className="mt-16 border-t border-border pt-10 sm:mt-20 sm:flex sm:items-end sm:justify-between sm:gap-12 sm:pt-12">
        <div className="max-w-xl">
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
            Want something like this for your business?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            Tell me what you&apos;re building. We can talk through scope, timing, and whether
            we&apos;re a good fit.
          </p>
        </div>
        <Link
          href="/contact"
          className="group mt-8 inline-flex items-center gap-2 text-base font-medium text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground sm:mt-0 sm:shrink-0"
        >
          Let&apos;s talk about your project
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={18}
            strokeWidth={1.8}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </footer>
    </div>
  );
}
