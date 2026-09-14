"use client";

import { Icon } from "@iconify/react";

/** Decorative Iconify glyph — client-only because @iconify/react is not RSC-safe. */
export function AboutFaceIcon() {
  return (
    <Icon
      inline
      className="inline align-middle text-green-300"
      icon="mdi:face-man-shimmer"
      aria-hidden
    />
  );
}
