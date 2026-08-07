"use client";

import { Moon02Icon, Sun01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ showLabel = false }: { showLabel?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex items-center justify-center gap-2 border border-border text-sm text-foreground transition-colors",
        showLabel
          ? "w-full bg-muted px-5 py-4 hover:border-foreground/30 dark:hover:bg-muted/80 sm:px-8"
          : "size-8 bg-muted hover:border-foreground/30 dark:hover:bg-muted/80",
      )}
      aria-label={label}
    >
      <HugeiconsIcon
        icon={isDark ? Sun01Icon : Moon02Icon}
        size={16}
        strokeWidth={1.6}
        aria-hidden="true"
      />
      {showLabel && <span>{isDark ? "Light mode" : "Dark mode"}</span>}
    </button>
  );
}
