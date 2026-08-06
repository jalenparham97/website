/* eslint-disable @next/next/no-img-element */
import { ExternalLinkIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  /** Larger featured treatment for real work at the top of the wall. */
  featured?: boolean;
  className?: string;
};

function hostLabel(href: string) {
  try {
    return new URL(href).host.replace(/^www\./, "");
  } catch {
    return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.name} — visit live website`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden border border-border bg-card text-left transition-[border-color] duration-300 ease-out hover:border-foreground/25 motion-reduce:transition-none",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border-b border-border bg-muted/30",
          featured ? "aspect-16/10 sm:aspect-video" : "aspect-16/11",
        )}
      >
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
        />
      </div>

      <div className={cn("flex flex-1 flex-col gap-4 p-5 sm:p-6", featured && "sm:p-7")}>
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3
              className={cn(
                "font-semibold tracking-[-0.03em] text-foreground",
                featured ? "text-2xl sm:text-[1.75rem]" : "text-xl sm:text-2xl",
              )}
            >
              {project.name}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              {hostLabel(project.href)}
            </span>
          </div>
          <p
            className={cn(
              "text-muted-foreground",
              featured
                ? "text-base leading-7 sm:text-lg sm:leading-8"
                : "text-[0.95rem] leading-7 sm:text-base sm:leading-7",
            )}
          >
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-4">
          <span className="text-sm font-medium text-foreground sm:text-base">
            Visit live website
          </span>
          <span
            aria-hidden
            className="text-foreground transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none"
          >
            <HugeiconsIcon icon={ExternalLinkIcon} size={20} strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </a>
  );
}
