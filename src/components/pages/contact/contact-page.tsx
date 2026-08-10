"use client";

import { useState } from "react";
import { stegaClean } from "@sanity/client/stega";
import { BubbleChatIcon, Copy01Icon, Mail01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ContactForm } from "@/components/contact-form";
import type { CONTACT_PAGE_QUERY_RESULT } from "@/sanity.types";
import type { SanityData } from "@/sanity/lib/types";

export function ContactPage({ data }: { data: SanityData<CONTACT_PAGE_QUERY_RESULT> }) {
  const email = data.emailSection?.email ? stegaClean(data.emailSection.email) : "";
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl py-14 sm:py-20 lg:py-24">
      <header className="pb-6">
        <h1 className="max-w-3xl text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground sm:text-5xl sm:leading-[1.06] sm:tracking-[-0.04em] lg:text-[3.5rem] lg:leading-[1.05]">
          {data.intro?.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
          {data.intro?.description}
        </p>
      </header>

      <div className="mt-6 grid items-start gap-3 sm:mt-8 lg:mt-10 lg:grid-cols-2 lg:gap-5">
        <section
          aria-labelledby="email-path-heading"
          className="border border-border bg-card p-6 sm:p-8 lg:p-10"
        >
          <div className="inline-flex size-10 shrink-0 items-center justify-center border border-border bg-background text-foreground dark:bg-muted">
            <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.7} />
          </div>

          <h2
            id="email-path-heading"
            className="mt-6 text-[1.5rem] font-semibold tracking-[-0.03em] text-foreground sm:mt-8 sm:text-[1.75rem]"
          >
            {data.emailSection?.headline}
          </h2>
          <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground sm:leading-8">
            {data.emailSection?.description}
          </p>

          <div className="border-t border-border pt-6 sm:mt-8">
            <a
              href={`mailto:${email}`}
              className="text-base font-medium text-foreground transition-opacity hover:opacity-75 sm:text-lg"
            >
              {data.emailSection?.email}
            </a>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${email}`}
                className="inline-flex flex-1 items-center justify-center gap-2 border border-foreground bg-foreground px-5 py-3.5 text-base font-medium text-background transition-colors hover:bg-foreground/90 sm:py-3"
              >
                Open email
                <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.7} />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex flex-1 items-center justify-center gap-2 border border-border bg-muted px-5 py-3.5 text-base font-medium text-foreground transition-colors hover:border-foreground/30 dark:hover:bg-muted/80 sm:py-3"
              >
                {copied ? (
                  <>
                    <HugeiconsIcon icon={Tick02Icon} size={18} strokeWidth={1.8} />
                    Copied
                  </>
                ) : (
                  <>
                    <HugeiconsIcon icon={Copy01Icon} size={18} strokeWidth={1.7} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="form-path-heading"
          className="border border-border bg-card p-6 sm:p-8 lg:p-10"
        >
          <div className="inline-flex size-10 shrink-0 items-center justify-center border border-border bg-background text-foreground dark:bg-muted">
            <HugeiconsIcon icon={BubbleChatIcon} size={18} strokeWidth={1.7} />
          </div>

          <h2
            id="form-path-heading"
            className="mt-6 text-[1.5rem] font-semibold tracking-[-0.03em] text-foreground sm:mt-8 sm:text-[1.75rem]"
          >
            {data.formSection?.headline}
          </h2>
          <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground sm:leading-8">
            {data.formSection?.description}
          </p>

          <div className="mt-6 border-t border-border pt-6 sm:mt-8 sm:pt-8">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
