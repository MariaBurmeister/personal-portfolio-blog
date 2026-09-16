"use client";

import { useRef, useState } from "react";

function paneOffsetInContainer(
  pane: HTMLElement,
  container: HTMLElement,
  axis: "left" | "top",
) {
  const paneRect = pane.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  if (axis === "left") {
    return paneRect.left - containerRect.left + container.scrollLeft;
  }
  return paneRect.top - containerRect.top + container.scrollTop;
}

function getNearestPaneIndex(
  container: HTMLElement,
  panes: HTMLElement[],
  scrollPos: number,
  axis: "left" | "top",
) {
  let best = 0;
  let bestDist = Infinity;
  panes.forEach((pane, i) => {
    const pos = paneOffsetInContainer(pane, container, axis);
    const dist = Math.abs(pos - scrollPos);
    if (dist < bestDist) {
      bestDist = dist;
      best = i;
    }
  });
  return best;
}

/** Shared snap-pane scrolling for Stepper and Timeline. */
export function usePaneScroll(axis: "left" | "top", edgeOffset = 15) {
  const container = useRef<HTMLDivElement>(null);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isScrollStart, setIsScrollStart] = useState(true);

  const syncScrollEdges = () => {
    const el = container.current;
    if (!el) return;

    if (axis === "left") {
      setIsScrollStart(el.scrollLeft <= edgeOffset);
      setIsScrollEnd(
        el.scrollLeft + el.offsetWidth >= el.scrollWidth - edgeOffset,
      );
      return;
    }

    setIsScrollStart(el.scrollTop <= edgeOffset);
    setIsScrollEnd(
      el.scrollTop + el.offsetHeight >= el.scrollHeight - edgeOffset,
    );
  };

  const getCurrentPaneIndex = () => {
    if (!container.current) return 0;
    const panes = Array.from(container.current.children) as HTMLElement[];
    const scrollPos =
      axis === "left"
        ? container.current.scrollLeft
        : container.current.scrollTop;
    return getNearestPaneIndex(container.current, panes, scrollPos, axis);
  };

  const scrollToPane = (index: number) => {
    if (!container.current) return;
    const panes = Array.from(container.current.children) as HTMLElement[];
    const pane = panes[Math.max(0, Math.min(index, panes.length - 1))];
    if (!pane) return;
    const offset = paneOffsetInContainer(pane, container.current, axis);
    // Instant: native smooth + mandatory snap fails backward in Chromium.
    if (axis === "left") {
      container.current.scrollTo({ left: offset, behavior: "auto" });
    } else {
      container.current.scrollTo({ top: offset, behavior: "auto" });
    }
    syncScrollEdges();
  };

  return {
    container,
    isScrollEnd,
    isScrollStart,
    handleScroll: syncScrollEdges,
    scrollToPane,
    scrollAhead: () => scrollToPane(getCurrentPaneIndex() + 1),
    scrollBack: () => scrollToPane(getCurrentPaneIndex() - 1),
  };
}
