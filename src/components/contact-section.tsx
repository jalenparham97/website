"use client";

import { useState } from "react";
import { Copy01Icon, Mail01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ContactForm } from "@/components/contact-form";

const CONTACT_EMAIL = "jalenparham97@gmail.com";

export function ContactSection() {
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
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
              Let&apos;s work together
            </h2>

            <p className="max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              Have a project in mind? I am always open to discussing new projects, creative ideas or
              opportunities to be a part of.
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-base font-medium text-foreground transition-opacity hover:opacity-75 sm:text-lg"
            >
              {CONTACT_EMAIL}
            </a>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
        </div>

        {/* Right Column: Contact Form Box */}
        <div className="border border-border bg-card p-6 sm:p-10 lg:p-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
