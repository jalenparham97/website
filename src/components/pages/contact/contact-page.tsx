"use client";

import { useState } from "react";
import { BubbleChatIcon, Copy01Icon, Mail01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ContactForm } from "@/components/contact-form";

const CONTACT_EMAIL = "jalenparham97@gmail.com";

export function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl py-6 sm:py-10 lg:py-12">
      <header className="pb-6">
        <h1 className="max-w-3xl text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground sm:text-5xl sm:leading-[1.06] sm:tracking-[-0.04em] lg:text-[3.5rem] lg:leading-[1.05]">
          Let&apos;s get in touch.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
          Want to talk about a new website project or an idea you&apos;re still shaping? Reach out.
          I&apos;d love to hear what you have in mind.
        </p>
      </header>

      <div className="mt-6 grid items-start gap-3 sm:mt-8 lg:mt-10 lg:grid-cols-2 lg:gap-5">
        <section
          aria-labelledby="email-path-heading"
          className="border border-border bg-card p-6 sm:p-8 lg:p-10"
        >
          <div className="inline-flex size-10 shrink-0 items-center justify-center border border-border bg-background text-foreground">
            <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.7} />
          </div>

          <h2
            id="email-path-heading"
            className="mt-6 text-[1.5rem] font-semibold tracking-[-0.03em] text-foreground sm:mt-8 sm:text-[1.75rem]"
          >
            Email me
          </h2>
          <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground sm:leading-8">
            Prefer your own inbox? Write me directly. I read every message and reply personally.
          </p>

          <div className="mt-6 border-t border-border pt-6 sm:mt-8 sm:pt-8">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="break-all text-lg font-medium tracking-[-0.02em] text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground sm:text-xl"
            >
              {CONTACT_EMAIL}
            </a>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex flex-1 items-center justify-center gap-2 border border-foreground bg-foreground px-5 py-3.5 text-base font-medium text-background transition-colors hover:bg-foreground/90 sm:py-3"
              >
                Open email
                <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.7} />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex flex-1 items-center justify-center gap-2 border border-border bg-background px-5 py-3.5 text-base font-medium text-foreground transition-colors hover:border-foreground/30 sm:py-3"
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
          <div className="inline-flex size-10 shrink-0 items-center justify-center border border-border bg-background text-foreground">
            <HugeiconsIcon icon={BubbleChatIcon} size={18} strokeWidth={1.7} />
          </div>

          <h2
            id="form-path-heading"
            className="mt-6 text-[1.5rem] font-semibold tracking-[-0.03em] text-foreground sm:mt-8 sm:text-[1.75rem]"
          >
            Send a message
          </h2>
          <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground sm:leading-8">
            Tell me a little about your website project or idea, and what you&apos;d like help with.
            I usually reply fast, and at the latest, within 24 hours.
          </p>

          <div className="mt-6 border-t border-border pt-6 sm:mt-8 sm:pt-8">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
