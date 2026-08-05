"use client";

import { useState } from "react";
import { Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText("jalenparham97@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Left Column: Headline, Bio & Direct Details */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
              Let&apos;s work together
            </h2>

            <p className="max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              Feel free to get in touch with me. I am always open to discussing new projects,
              creative ideas or opportunities to be a part of.
            </p>
          </div>

          {/* Direct Email */}
          <div className="flex items-center justify-between border-t border-border pt-6">
            <div className="flex items-center gap-3.5">
              <HugeiconsIcon
                icon={Mail01Icon}
                size={20}
                strokeWidth={1.5}
                className="text-muted-foreground"
              />
              <a
                href="mailto:jalenparham97@gmail.com"
                className="text-base font-medium text-foreground transition-opacity hover:opacity-75 sm:text-lg"
              >
                jalenparham97@gmail.com
              </a>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </div>

        {/* Right Column: Contact Form Box */}
        <div className="border border-border bg-card p-6 sm:p-10 lg:p-12">
          {/* <div className="mb-6 flex flex-col gap-1.5">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
              Send a message
            </h3>
          </div> */}

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
