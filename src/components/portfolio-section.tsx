/* eslint-disable @next/next/no-img-element */
"use client";

import { ExternalLinkIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const projects = [
  {
    name: "Formbox",
    category: "SaaS & Web Tool",
    role: "Design & Development",
    description:
      "A simple form backend service that lets creators and teams build custom HTML forms and collect responses effortlessly.",
    highlights: ["Custom Form Endpoints", "Submission Dashboard", "Clean API"],
    href: "https://formbox.app/",
    image: "/projects/formbox.png",
  },
  {
    name: "Beyond Births",
    category: "Wellness & Community",
    role: "Web Strategy & Design",
    description:
      "A welcoming educational platform providing clear guidance on exercise, nutrition, birth planning, and finding care facilities.",
    highlights: ["Resource Directory", "Calm Editorial Layout", "Accessible Content"],
    href: "https://www.beyondbirths.org/",
    image: "/projects/beyond-births.png",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="border-t border-border py-20 sm:py-28">
      {/* Editorial Vertical Header */}
      <div className="mb-12 flex flex-col gap-4 sm:mb-16">
        <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
          Recent Work
        </h2>
        <p className="max-w-2xl text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8">
          A few websites I have designed and built to help businesses communicate clearly and make a
          lasting impression.
        </p>
      </div>

      {/* Showcase Cards Stack */}
      <div className="flex flex-col gap-8 sm:gap-10">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group relative grid gap-8 border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/25 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-10"
          >
            {/* Left Column: Compact Browser Window Image Frame */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-border bg-background transition-all duration-300 group-hover:border-foreground/20">
                {/* Browser Toolbar */}
                <div className="flex items-center gap-1.5 border-b border-border/80 bg-muted/30 px-3 py-2">
                  <span className="size-2 rounded-full bg-border" />
                  <span className="size-2 rounded-full bg-border" />
                  <span className="size-2 rounded-full bg-border" />
                  <span className="ml-1.5 font-mono text-[10px] text-muted-foreground/80">
                    {project.href.replace("https://", "")}
                  </span>
                </div>

                {/* Preview Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-muted/10">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} website preview`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      onError={(e) => {
                        // Fallback if image file does not exist yet
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector(".image-fallback");
                          if (fallback) fallback.classList.remove("hidden");
                        }
                      }}
                    />
                  ) : null}

                  {/* Fallback frame placeholder when image is missing */}
                  <div
                    className={`image-fallback flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center ${
                      project.image ? "hidden" : ""
                    }`}
                  >
                    <div className="flex size-10 items-center justify-center border border-border bg-background">
                      <span className="font-mono text-xs font-semibold text-foreground">
                        {project.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] font-medium text-muted-foreground">
                      {project.name} Preview
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content Details */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-7">
              <div>
                {/* Title & Description */}
                <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {project.description}
                </p>
              </div>

              {/* Visit Live Website Link */}
              <div className="flex items-center justify-between border-t border-border/60 pt-5">
                <span className="text-base font-medium text-foreground">Visit live website</span>
                <span
                  aria-hidden="true"
                  className="text-foreground transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  <HugeiconsIcon icon={ExternalLinkIcon} size={20} strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
