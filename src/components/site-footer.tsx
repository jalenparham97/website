"use client";

import { ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface SocialLink {
  name: string;
  url: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jalenparham",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/jalenparham",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    name: "X",
    url: "https://x.com/jalenparham",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-border pt-16 pb-20 sm:pt-20 sm:pb-24">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        {/* Left Column: Brand Identity & Tagline */}
        <div className="flex flex-col gap-3.5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex size-11 overflow-hidden border border-border bg-background">
              <img src="/me.png" alt="Jalen Parham" className="size-full object-cover" />
            </span>
            <span className="font-mono text-base font-medium text-foreground">Jalen Parham</span>
            <span className="font-mono text-sm text-muted-foreground">
              © {new Date().getFullYear()}
            </span>
          </div>
          <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
            Living, learning, and leveling up one day at a time.
          </p>
        </div>

        {/* Right Column: Social Icon Buttons + Back to Top */}
        <div className="flex flex-col gap-6 sm:items-end">
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="group flex size-10 items-center justify-center border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  <Icon className="size-4.5 transition-colors group-hover:text-background" />
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground self-start sm:self-auto"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <HugeiconsIcon
              icon={ArrowUp01Icon}
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
