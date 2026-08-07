"use client";

import { useEffect, useState } from "react";
import { VisualEditing } from "next-sanity/visual-editing";

export function VisualEditingControls() {
  const [inPresentation, setInPresentation] = useState(false);

  useEffect(() => {
    setInPresentation(window.self !== window.top);
  }, []);

  if (!inPresentation) {
    return null;
  }

  return <VisualEditing />;
}
