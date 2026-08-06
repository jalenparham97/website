import Link from "next/link";
import {
  ArrowUpRight01Icon,
  ContentWritingIcon,
  Tick02Icon,
  WebDesign01Icon,
  WebProgrammingIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

/**
 * Commercial services layout (packages-led).
 * Revert: in src/app/services/page.tsx, import from
 * `@/components/pages/services/services-page.classic` instead of this file.
 */

const services = [
  {
    title: "Web design",
    description:
      "Clear layouts and a distinct visual direction built around the way your business should feel.",
    icon: WebDesign01Icon,
  },
  {
    title: "Website development",
    description:
      "A smooth, reliable website that helps people find what they need and take the next step.",
    icon: WebProgrammingIcon,
  },
  {
    title: "Content management",
    description: "Simple ways to keep your website current as your business grows and changes.",
    icon: ContentWritingIcon,
  },
];

const packages = [
  {
    name: "Design",
    price: "From $1,500",
    blurb: "For a clear visual direction before anything is built.",
    features: ["Visual direction", "Key page layouts", "Mobile-first structure", "Content outline"],
    featured: false,
  },
  {
    name: "Website",
    price: "From $3,500",
    blurb: "Design and development for a complete, ready-to-launch site.",
    features: [
      "Custom design",
      "Full development",
      "Responsive build",
      "Basic content setup",
      "Launch support",
    ],
    featured: true,
  },
  {
    name: "Care",
    price: "From $150/mo",
    blurb: "Ongoing updates and light maintenance after your site is live.",
    features: ["Content updates", "Small design tweaks", "Performance checks", "Priority support"],
    featured: false,
  },
];

export function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl py-14 sm:py-20 lg:py-24">
      <header className="grid gap-8 border-b border-border pb-10 sm:gap-10 sm:pb-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16 lg:pb-14">
        <div className="min-w-0">
          <h1 className="max-w-3xl text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground sm:text-5xl sm:leading-[1.06] sm:tracking-[-0.04em] lg:text-[3.75rem] lg:leading-[1.05]">
            Web design and development for small businesses.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
            Straightforward web work for small businesses and independent people. Clear scope,
            direct communication, and a website you can manage.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 md:max-w-md md:flex-row lg:max-w-none lg:flex-col lg:items-stretch">
          <a
            href="#packages"
            className="inline-flex w-full items-center justify-center gap-2 border border-foreground bg-foreground px-5 py-3.5 text-base font-medium text-background transition-colors hover:bg-foreground/90 sm:py-3"
          >
            View packages
          </a>
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 border border-border bg-background px-5 py-3.5 text-base font-medium text-foreground transition-colors hover:border-foreground/30 sm:py-3"
          >
            Start a project
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={18}
              strokeWidth={1.8}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </header>

      <section aria-labelledby="what-i-do" className="mt-12 sm:mt-16">
        <div className="max-w-xl">
          <h2
            id="what-i-do"
            className="text-[1.5rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]"
          >
            What I offer
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Each site I develop is built with the user in mind, delivering a great user experience
            and design, using the latest web technologies.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col overflow-hidden border border-border bg-card p-5 text-card-foreground transition-colors duration-300 ease-out hover:border-foreground/25 motion-reduce:transition-none sm:p-6 md:min-h-56 md:p-7"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-foreground/70 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
              />

              <div className="flex items-start gap-4 md:flex-col md:gap-0">
                <span className="inline-flex size-10 shrink-0 items-center justify-center border border-border bg-background text-foreground transition-colors duration-300 group-hover:border-foreground/20 group-hover:bg-muted/40">
                  <HugeiconsIcon icon={service.icon} size={18} strokeWidth={1.7} />
                </span>

                <div className="min-w-0 md:mt-6">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground md:mt-3 md:flex-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="packages-heading"
        id="packages"
        className="mt-16 scroll-mt-24 sm:mt-24 sm:scroll-mt-28"
      >
        <div className="max-w-xl">
          <h2
            id="packages-heading"
            className="text-[1.5rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]"
          >
            Packages
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Starting points with clear scope. Final pricing depends on pages, complexity, and
            timeline.
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex h-full flex-col overflow-hidden border p-5 sm:p-6 md:p-7 ${
                pkg.featured
                  ? "border-foreground bg-foreground text-background"
                  : "group border-border bg-card text-card-foreground transition-colors duration-300 ease-out hover:border-foreground/25 motion-reduce:transition-none"
              }`}
            >
              {!pkg.featured ? (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px origin-left scale-x-0 bg-foreground/70 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                />
              ) : null}

              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-lg font-medium tracking-[-0.02em] sm:text-xl">{pkg.name}</h3>
                {pkg.featured ? (
                  <span className="text-sm text-background/70">Most common</span>
                ) : null}
              </div>

              <p
                className={`mt-5 text-[1.75rem] font-semibold tracking-[-0.03em] sm:mt-6 sm:text-3xl ${
                  pkg.featured ? "text-background" : "text-foreground"
                }`}
              >
                {pkg.price}
              </p>
              <p
                className={`mt-2 text-base leading-7 ${
                  pkg.featured ? "text-background/75" : "text-muted-foreground"
                }`}
              >
                {pkg.blurb}
              </p>

              <ul
                className={`mt-6 flex flex-1 flex-col gap-3 border-t pt-5 text-base leading-7 sm:mt-8 sm:pt-6 ${
                  pkg.featured
                    ? "border-background/20 text-background/90"
                    : "border-border text-muted-foreground"
                }`}
              >
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={18}
                      strokeWidth={1.8}
                      className={`mt-0.5 shrink-0 ${
                        pkg.featured ? "text-background/70" : "text-foreground/55"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`group mt-6 inline-flex w-full items-center justify-center gap-2 border px-4 py-3.5 text-base font-medium transition-colors sm:mt-8 sm:py-3 ${
                  pkg.featured
                    ? "border-background bg-background text-foreground hover:bg-background/90"
                    : "border-border bg-background text-foreground hover:border-foreground/30"
                }`}
              >
                Inquire
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-5 text-base leading-7 text-muted-foreground sm:mt-6">
          Need something outside these packages?{" "}
          <Link
            href="/contact"
            className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Tell me what you need
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 border border-foreground bg-foreground px-5 py-8 text-background sm:mt-24 sm:flex sm:items-center sm:justify-between sm:gap-12 sm:px-8 sm:py-12">
        <div className="max-w-md">
          <h2 className="text-[1.5rem] font-semibold tracking-[-0.03em] sm:text-[2rem]">
            Ready when you are
          </h2>
          <p className="mt-3 text-base leading-7 text-background/75 sm:text-lg sm:leading-8">
            Share a bit about the project and I&apos;ll follow up with fit, timing, and next steps.
          </p>
        </div>
        <Link
          href="/contact"
          className="group mt-6 inline-flex w-full items-center justify-center gap-2 border border-background bg-background px-5 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-background/90 sm:mt-0 sm:w-auto sm:shrink-0 sm:py-3"
        >
          Discuss your project
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={18}
            strokeWidth={1.8}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </section>
    </div>
  );
}
