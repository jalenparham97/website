"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ThemeToggle } from "@/components/theme-toggle";

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
        <Link
          href="/"
          className="inline-flex size-11 overflow-hidden border border-border bg-background"
          aria-label="Jalen Parham home"
        >
          <Image
            src="/me.png"
            alt="Jalen Parham"
            width={44}
            height={44}
            className="size-full object-cover"
          />
        </Link>
        <div className="hidden items-center gap-5 text-base text-muted-foreground md:flex md:gap-7">
          <Link className="transition-colors hover:text-foreground" href="/about">
            About
          </Link>
          <Link className="transition-colors hover:text-foreground" href="/services">
            Services
          </Link>
          <Link className="transition-colors hover:text-foreground" href="/work">
            My work
          </Link>
          <Link className="transition-colors hover:text-foreground" href="/contact">
            Contact
          </Link>
          <ThemeToggle />
        </div>
        <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen} swipeDirection="right">
          <DrawerTrigger
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
          </DrawerTrigger>
          <DrawerContent className="h-[calc(100dvh-1rem)] w-[min(88vw,26rem)] rounded-none border-y-0 border-r-0 border-l border-border bg-background p-5 text-lg text-muted-foreground shadow-2xl sm:p-8">
            <DrawerTitle className="sr-only">Mobile navigation</DrawerTitle>
            <div className="flex items-center justify-between border-b border-border pb-5">
              <span className="inline-flex size-11 overflow-hidden border border-border bg-background">
                <Image
                  src="/me.png"
                  alt="Jalen Parham"
                  width={44}
                  height={44}
                  className="size-full object-cover"
                />
              </span>
              <DrawerClose
                className="relative inline-flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:bg-muted"
                aria-label="Close navigation menu"
              >
                <span className="absolute h-px w-5 rotate-45 bg-current" />
                <span className="absolute h-px w-5 -rotate-45 bg-current" />
              </DrawerClose>
            </div>
            <div className="flex flex-1 flex-col pt-5">
              <Link
                className="border-b border-border/60 py-5 transition-colors hover:text-foreground"
                href="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                className="border-b border-border/60 py-5 transition-colors hover:text-foreground"
                href="/services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                className="border-b border-border/60 py-5 transition-colors hover:text-foreground"
                href="/work"
                onClick={() => setIsMenuOpen(false)}
              >
                My work
              </Link>
              <Link
                className="border-b border-border/60 py-5 transition-colors hover:text-foreground"
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="mt-auto pt-8">
                <ThemeToggle showLabel />
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
