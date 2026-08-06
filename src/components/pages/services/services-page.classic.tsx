import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const services = [
  {
    title: "Web design",
    description:
      "Clear layouts and a distinct visual direction built around the way your business should feel.",
  },
  {
    title: "Website development",
    description:
      "A smooth, reliable website that helps people find what they need and take the next step.",
  },
  {
    title: "Content management",
    description: "Simple ways to keep your website current as your business grows and changes.",
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
      <header className="max-w-5xl">
        <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl">
          Web design and development for small businesses.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Straightforward web work for small businesses and independent people. Clear scope, direct
          communication, and a site you can manage.
        </p>
      </header>

      <section aria-labelledby="what-i-do" className="mt-16 sm:mt-20">
        <h2 id="what-i-do" className="text-sm font-medium text-muted-foreground">
          What I do
        </h2>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {services.map((service) => (
            <li
              key={service.title}
              className="grid gap-2 py-6 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:items-baseline sm:gap-10 sm:py-7"
            >
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="packages" className="mt-20 sm:mt-24">
        <div className="max-w-xl">
          <h2
            id="packages"
            className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl"
          >
            Packages
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Starting points. Final pricing depends on scope, pages, and timeline.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`flex flex-col border p-6 sm:p-7 ${
                pkg.featured
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card text-card-foreground"
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-medium tracking-[-0.02em]">{pkg.name}</h3>
                {pkg.featured ? (
                  <span className="text-xs text-background/70">Most common</span>
                ) : null}
              </div>

              <p
                className={`mt-5 text-2xl font-medium tracking-[-0.03em] ${
                  pkg.featured ? "text-background" : "text-foreground"
                }`}
              >
                {pkg.price}
              </p>
              <p
                className={`mt-2 text-sm leading-6 ${
                  pkg.featured ? "text-background/75" : "text-muted-foreground"
                }`}
              >
                {pkg.blurb}
              </p>

              <ul
                className={`mt-8 flex flex-1 flex-col gap-2.5 border-t pt-6 text-sm leading-6 ${
                  pkg.featured
                    ? "border-background/20 text-background/85"
                    : "border-border text-muted-foreground"
                }`}
              >
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 border px-4 py-2.5 text-sm font-medium transition-colors ${
                  pkg.featured
                    ? "border-background bg-background text-foreground hover:bg-background/90"
                    : "border-border bg-background text-foreground hover:border-foreground/30"
                }`}
              >
                Inquire
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.8} />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm leading-6 text-muted-foreground">
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

      <section className="mt-20 border-t border-border pt-10 sm:mt-24 sm:flex sm:items-end sm:justify-between sm:gap-12 sm:pt-12">
        <div className="max-w-md">
          <h2 className="text-2xl font-medium tracking-[-0.03em] text-foreground sm:text-3xl">
            Ready to start?
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Share a bit about the project and I&apos;ll follow up with next steps.
          </p>
        </div>
        <Link
          href="/contact"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground sm:mt-0 sm:shrink-0"
        >
          Get in touch
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={16}
            strokeWidth={1.8}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </section>
    </div>
  );
}
