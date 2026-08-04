"use client";

import { useEffect, useState } from "react";

export function SiteHeader() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setHasScrolled(window.scrollY > 12);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 -mx-5 flex items-center justify-between border-b px-5 py-5 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 sm:-mx-8 sm:px-8 ${
        hasScrolled
          ? "border-border/60 bg-background/80 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <a
        href="#top"
        className="font-mono text-sm font-semibold tracking-[-0.02em]"
        aria-label="Jalen Parham home"
      >
        JP<span className="text-muted-foreground">.</span>
      </a>
      <div className="flex items-center gap-5 text-sm text-muted-foreground sm:gap-7">
        <a className="transition-colors hover:text-foreground" href="#about">
          About
        </a>
        <a className="transition-colors hover:text-foreground" href="#services">
          Services
        </a>
        <a className="transition-colors hover:text-foreground" href="#portfolio">
          Portfolio
        </a>
        <a className="transition-colors hover:text-foreground" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}
