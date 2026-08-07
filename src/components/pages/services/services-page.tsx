import Link from "next/link";
import { stegaClean } from "@sanity/client/stega";
import {
  ArrowUpRight01Icon,
  Archive02Icon,
  ContentWritingIcon,
  Tick02Icon,
  WebDesign01Icon,
  WebProgrammingIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { SERVICES_PAGE_QUERY_RESULT } from "@/sanity.types";
import type { SanityData } from "@/sanity/lib/types";

const icons = {
  content: ContentWritingIcon,
  design: WebDesign01Icon,
  development: WebProgrammingIcon,
};

export function ServicesPage({ data }: { data: SanityData<SERVICES_PAGE_QUERY_RESULT> }) {
  const { intro, offer, packages, finalCta } = data;
  const introCtaHref = intro?.cta?.href ? stegaClean(intro.cta.href) : undefined;
  const noteLinkHref = packages?.noteLink?.href ? stegaClean(packages.noteLink.href) : undefined;
  const finalCtaHref = finalCta?.link?.href ? stegaClean(finalCta.link.href) : undefined;

  return (
    <div className="mx-auto max-w-5xl py-14 sm:py-20 lg:py-24">
      <header className="grid gap-8 border-b border-border pb-10 sm:gap-10 sm:pb-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16 lg:pb-14">
        <div>
          <h1 className="max-w-3xl text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.75rem]">
            {intro?.headline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {intro?.description}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3">
          <a
            href="#packages"
            className="group inline-flex items-center justify-center gap-2 border border-foreground bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            {intro?.packagesLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <HugeiconsIcon icon={Archive02Icon} size={18} strokeWidth={1.5} />
            </span>
          </a>
          {introCtaHref && (
            <Link
              href={introCtaHref}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-none border border-border bg-muted px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 dark:hover:bg-muted/80"
            >
              {intro?.cta?.label}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none">
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={1.5} />
              </span>
            </Link>
          )}
        </div>
      </header>

      <section aria-labelledby="what-i-do" className="mt-12 sm:mt-16">
        <div className="max-w-xl">
          <h2 id="what-i-do" className="text-[1.5rem] font-semibold text-foreground sm:text-[2rem]">
            {offer?.headline}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">
            {offer?.description}
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:mt-10 md:grid-cols-3">
          {offer?.items?.map((service) => {
            const iconKey = service.icon ? stegaClean(service.icon) : undefined;
            return (
              <article
                key={service._key}
                className="group relative flex flex-col overflow-hidden border border-border bg-card p-5 text-card-foreground transition-colors duration-300 ease-out hover:border-foreground/25 motion-reduce:transition-none sm:p-6 md:min-h-56 md:p-7"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-foreground/70 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                />
                <span className="inline-flex size-10 items-center justify-center border border-border bg-background text-foreground transition-colors duration-300 group-hover:border-foreground/20 group-hover:bg-muted/40">
                  <HugeiconsIcon
                    icon={
                      iconKey && iconKey in icons
                        ? icons[iconKey as keyof typeof icons]
                        : WebDesign01Icon
                    }
                    size={18}
                  />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-foreground sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-muted-foreground">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="packages"
        aria-labelledby="packages-heading"
        className="mt-16 scroll-mt-24 sm:mt-24"
      >
        <div className="max-w-xl">
          <h2
            id="packages-heading"
            className="text-[1.5rem] font-semibold text-foreground sm:text-[2rem]"
          >
            {packages?.headline}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">
            {packages?.description}
          </p>
        </div>
        <div className="mt-8 grid items-stretch gap-3 sm:mt-10 lg:grid-cols-3">
          {packages?.items?.map((pkg) => (
            <article
              key={pkg._key}
              className={`relative flex h-full flex-col overflow-hidden border p-5 sm:p-6 md:p-7 ${
                pkg.featured
                  ? "border-foreground bg-foreground text-background"
                  : "group border-border bg-card text-card-foreground transition-colors duration-300 ease-out hover:border-foreground/25 motion-reduce:transition-none"
              }`}
            >
              {!pkg.featured && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px origin-left scale-x-0 bg-foreground/70 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                />
              )}
              <div className="flex justify-between gap-3">
                <h3 className="text-lg font-medium sm:text-xl">{pkg.name}</h3>
                {pkg.featured && <span className="text-sm text-background/70">Most common</span>}
              </div>
              <p
                className={`mt-5 text-3xl font-semibold ${
                  pkg.featured ? "text-background" : "text-foreground"
                }`}
              >
                {pkg.price}
              </p>
              <p
                className={`mt-2 text-base leading-7 ${
                  pkg.featured ? "text-background/80" : "text-muted-foreground"
                }`}
              >
                {pkg.blurb}
              </p>
              <ul
                className={`mt-6 flex flex-1 flex-col gap-3 border-t pt-5 text-base leading-7 ${
                  pkg.featured
                    ? "border-background/20 text-background/90"
                    : "border-border text-muted-foreground"
                }`}
              >
                {pkg.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={18}
                      className={pkg.featured ? "text-background/75" : "text-foreground/55"}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {finalCtaHref && (
                <Link
                  href={finalCtaHref}
                  className={`group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-none border px-5 py-3.5 text-sm font-medium transition-colors ${
                    pkg.featured
                      ? "border-background bg-background text-foreground hover:bg-background/90"
                      : "border-border bg-muted text-foreground hover:border-foreground/30 dark:hover:bg-muted/80"
                  }`}
                >
                  {packages?.ctaLabel || "Inquire"}
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none">
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={1.5} />
                  </span>
                </Link>
              )}
            </article>
          ))}
        </div>
        {packages?.note && (
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            {packages.note}{" "}
            {noteLinkHref && (
              <Link href={noteLinkHref} className="font-medium text-foreground underline">
                {packages.noteLink?.label}
              </Link>
            )}
            .
          </p>
        )}
      </section>

      <section className="mt-16 border border-foreground bg-foreground px-5 py-8 text-background sm:mt-24 sm:flex sm:items-center sm:justify-between sm:gap-12 sm:px-8 sm:py-12">
        <div className="max-w-md">
          <h2 className="text-[1.5rem] font-semibold sm:text-[2rem]">{finalCta?.headline}</h2>
          <p className="mt-3 text-base leading-7 text-background/75 sm:text-lg">
            {finalCta?.description}
          </p>
        </div>
        {finalCtaHref && (
          <Link
            href={finalCtaHref}
            className="group mt-6 inline-flex items-center justify-center gap-2 rounded-none border border-background bg-background px-5 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-background/90 sm:mt-0"
          >
            <span>{finalCta?.link?.label}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none">
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={1.5} />
            </span>
          </Link>
        )}
      </section>
    </div>
  );
}
