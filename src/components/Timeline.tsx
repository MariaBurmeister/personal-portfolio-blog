"use client";

import {
  Children,
  FunctionComponent,
  MouseEventHandler,
  ReactNode,
} from "react";
import { usePaneScroll } from "./usePaneScroll";

interface TimelineProps {
  children: ReactNode;
  className?: string;
  /** Extra classes merged onto each pane. */
  styleSteps?: string;
  /**
   * Connector between blocks (not before the first or after the last).
   * Acts as the prev/next hit target on each pane edge.
   */
  connector: ReactNode;
}

/**
 * Panes are at least the scroller height but may grow with their content
 * (e.g. an expanded card), so tall content pushes the next pane down instead
 * of overlapping it. Inside a pane taller than the scroller, snapping lets the
 * user scroll freely until the pane edge.
 */
const paneClassName =
  "box-border flex min-h-full w-full shrink-0 snap-center snap-always flex-col items-center px-4";

/** Vertical snap timeline with inset connectors between panes. */
export const Timeline: FunctionComponent<TimelineProps> = ({
  className,
  styleSteps,
  children,
  connector,
}) => {
  const childrenArray = Children.toArray(children);
  const lastIndex = childrenArray.length - 1;
  // Connectors target explicit indices: with a tall pane the "nearest pane"
  // heuristic could otherwise skip one after scrolling within it.
  const { container, handleScroll, scrollToPane } = usePaneScroll("top");

  const paneClass = [paneClassName, styleSteps].filter(Boolean).join(" ");

  return (
    <section
      className={`flex h-full min-h-0 w-full min-w-0 flex-col items-stretch ${className ?? ""}`}
    >
      <div
        onScroll={handleScroll}
        ref={container}
        className="flex min-h-0 min-w-0 flex-1 snap-y snap-mandatory flex-col overflow-x-hidden overflow-y-auto"
      >
        {childrenArray.map((child, index) => (
          <div key={index} className={paneClass}>
            {index > 0 ? (
              <ConnectorHitArea
                onClick={() => scrollToPane(index - 1)}
                label="scroll to previous pane"
              >
                {connector}
              </ConnectorHitArea>
            ) : (
              <div className="min-h-0 w-full flex-1" aria-hidden />
            )}
            <div className="shrink-0">{child}</div>
            {index < lastIndex ? (
              <ConnectorHitArea
                onClick={() => scrollToPane(index + 1)}
                label="scroll to next pane"
              >
                {connector}
              </ConnectorHitArea>
            ) : (
              <div className="min-h-0 w-full flex-1" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const ConnectorHitArea: FunctionComponent<{
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: string;
  children: ReactNode;
}> = ({ onClick, label, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex min-h-11 w-full min-w-0 flex-1 cursor-pointer items-stretch justify-center"
    title={label}
  >
    {children}
    <span className="sr-only">{label}</span>
  </button>
);
