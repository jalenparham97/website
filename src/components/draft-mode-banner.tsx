"use client";

import { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";

export function DraftModeBanner() {
  const [inPresentation, setInPresentation] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setInPresentation(window.self !== window.top);
  }, []);

  if (inPresentation) {
    return null;
  }

  function exitDraftMode() {
    startTransition(async () => {
      await fetch("/api/draft-mode/disable");
      window.location.reload();
    });
  }

  return (
    <div className="sticky top-0 z-50 border-b border-amber-500/30 bg-amber-100 text-amber-950 dark:bg-amber-950 dark:text-amber-50">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-5 py-2 sm:px-8 lg:px-12">
        <p className="text-sm font-medium">
          Draft mode is on. You are viewing unpublished content.
        </p>
        <Button
          size="xs"
          variant="outline"
          disabled={isPending}
          onClick={exitDraftMode}
          className="border-amber-500/40 bg-transparent hover:border-amber-700/50 dark:border-amber-400/30 dark:hover:border-amber-200/40"
        >
          {isPending ? "Exiting..." : "Exit draft mode"}
        </Button>
      </div>
    </div>
  );
}
