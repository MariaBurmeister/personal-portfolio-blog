"use client";

import {
  Children,
  FunctionComponent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { usePaneScroll } from "./usePaneScroll";

interface StepperProps {
  children: ReactNode;
  className?: string;
  /** Extra classes merged onto each pane. */
  styleSteps?: string;
  /** Control content, or a string to use the default chevron. Omit to hide. */
  nextStep?: ReactNode | string;
  prevStep?: ReactNode | string;
}

const chevronClassName =
  "rounded-full bg-slate-100 p-1 text-2xl text-slate-600 hover:bg-slate-400 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-600";

const paneClassName =
  "box-border w-full max-w-full shrink-0 basis-full snap-center snap-always px-2";

function resolveControl(
  control: ReactNode | string | undefined,
  fallback: ReactNode
) {
  if (control === undefined) return null;
  if (typeof control === "string") return fallback;
  return control;
}

function withPaneProps(
  child: ReactNode,
  index: number,
  extraClassName?: string
) {
  if (!isValidElement(child)) return child;

  const element = child as ReactElement<{ className?: string }>;
  return cloneElement(element, {
    key: element.key ?? index,
    className: [paneClassName, extraClassName, element.props.className]
      .filter(Boolean)
      .join(" "),
  });
}

/** Horizontal snap carousel with external prev/next controls. */
export const Stepper: FunctionComponent<StepperProps> = ({
  className,
  styleSteps,
  children,
  nextStep,
  prevStep,
}) => {
  const childrenArray = Children.toArray(children);
  const {
    container,
    isScrollEnd,
    isScrollStart,
    handleScroll,
    scrollAhead,
    scrollBack,
  } = usePaneScroll("left");

  const prev = resolveControl(
    prevStep,
    <BsChevronLeft className={chevronClassName} aria-hidden />
  );
  const next = resolveControl(
    nextStep,
    <BsChevronRight className={chevronClassName} aria-hidden />
  );

  return (
    <section
      className={`flex h-full min-h-0 w-full min-w-0 flex-row items-stretch gap-2 ${className ?? ""}`}
    >
      {prev && (
        <StepControl
          hidden={isScrollStart}
          onClick={scrollBack}
          label="scroll to previous pane"
        >
          {prev}
        </StepControl>
      )}
      <div
        onScroll={handleScroll}
        ref={container}
        className="flex min-h-0 min-w-0 flex-1 snap-x snap-mandatory flex-row items-center overflow-x-auto overflow-y-hidden"
      >
        {childrenArray.map((child, index) =>
          withPaneProps(child, index, styleSteps)
        )}
      </div>
      {next && (
        <StepControl
          hidden={isScrollEnd}
          onClick={scrollAhead}
          label="scroll to next pane"
        >
          {next}
        </StepControl>
      )}
    </section>
  );
};

const StepControl: FunctionComponent<{
  hidden: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: string;
  children: ReactNode;
}> = ({ hidden, onClick, label, children }) => (
  <button
    type="button"
    className={`flex shrink-0 items-center justify-center self-center ${
      hidden ? "pointer-events-none opacity-0" : ""
    }`}
    onClick={onClick}
    disabled={hidden}
  >
    {children}
    <span className="sr-only">{label}</span>
  </button>
);
