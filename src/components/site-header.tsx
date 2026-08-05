"use client";

import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function SiteHeader() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className={`sticky top-0 z-50 border-b py-3 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        hasScrolled || isMenuOpen
          ? "border-border/60 bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="/"
          className="inline-flex bg-black px-3 py-2 font-mono text-lg font-semibold tracking-[-0.02em] text-white"
          aria-label="Jalen Parham home"
        >
          JP
        </a>
        <div className="hidden items-center gap-5 text-base text-muted-foreground md:flex md:gap-7">
          <a className="transition-colors hover:text-foreground" href="/about">
            About
          </a>
          <a className="transition-colors hover:text-foreground" href="/#services">
            Services
          </a>
          <a className="transition-colors hover:text-foreground" href="/#portfolio">
            My work
          </a>
          <a className="transition-colors hover:text-foreground" href="/#contact">
            Contact
          </a>
        </div>
        <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <PopoverTrigger
            className="relative inline-flex size-11 items-center justify-center border border-border text-foreground md:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-200 ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-200 ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </PopoverTrigger>
          <PopoverContent
            align="end"
            sideOffset={0}
            className="w-[calc(100vw-2.5rem)] max-w-none gap-0 rounded-none border-border/60 border-t-0 bg-background p-0 text-lg text-muted-foreground shadow-none ring-0 sm:w-[calc(100vw-4rem)]"
          >
            <div className="flex flex-col">
              <a
                className="border-b border-border/60 px-5 py-4 transition-colors hover:text-foreground sm:px-8"
                href="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                className="border-b border-border/60 px-5 py-4 transition-colors hover:text-foreground sm:px-8"
                href="/#services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                className="border-b border-border/60 px-5 py-4 transition-colors hover:text-foreground sm:px-8"
                href="/#portfolio"
                onClick={() => setIsMenuOpen(false)}
              >
                My work
              </a>
              <a
                className="px-5 py-4 transition-colors hover:text-foreground sm:px-8"
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
