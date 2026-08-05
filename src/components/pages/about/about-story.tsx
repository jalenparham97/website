import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function AboutStory() {
  return (
    <article className="mx-auto max-w-5xl py-14 sm:py-20 lg:py-24">
      <header className="mx-auto max-w-3xl">
        <h1 className="max-w-3xl text-balance text-[clamp(2.75rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-foreground">
          A software engineer and independent web developer who cares about the details.
        </h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
          <p>
            I&apos;m Jalen, a software engineer and independent web developer. I work directly with
            small businesses and people building something of their own, helping turn good ideas
            into clear, dependable websites.
          </p>
          <p>
            My background is in software engineering, where I learned to care about accuracy, speed,
            and maintainability. I bring those same instincts to the web, alongside a love for
            thoughtful typography, useful structure, and details that make a site feel easy to use.
          </p>
          <p>
            My approach is simple: make the important things clear, leave out what doesn&apos;t
            help, and build something you can manage after launch. I prefer a direct working
            relationship, simple feedback, and decisions made together as the work takes shape.
          </p>
        </div>
      </header>

      <footer className="mx-auto mt-20 max-w-3xl border-t border-border pt-10 sm:mt-24 sm:flex sm:items-end sm:justify-between sm:gap-12 sm:pt-12">
        <div className="max-w-xl">
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
            Want to talk about your project?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            Tell me what you&apos;re building, what you need help with, and where you&apos;d like to
            take it.
          </p>
        </div>
        <Link
          href="/#contact"
          className="group mt-8 inline-flex items-center gap-2 text-base font-medium text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground sm:mt-0 sm:shrink-0"
        >
          Get in touch
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={18}
            strokeWidth={1.8}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </footer>
    </article>
  );
}
