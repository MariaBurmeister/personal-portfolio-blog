"use client";
import { Icon } from "@iconify/react";
import {
  FunctionComponent,
  ReactNode,
  Children,
  useRef,
  useState,
  MouseEventHandler,
} from "react";

interface StepsProps {
  direction?: "horizontal" | "vertical";
  children: ReactNode;
  styleSteps?: string;
  className?: string;
  nextStep?: ReactNode | string;
  prevStep?: ReactNode | string;
}

const getNearestPaneIndex = (
  panes: HTMLElement[],
  scrollPos: number,
  axis: "left" | "top"
) => {
  let best = 0;
  let bestDist = Infinity;
  panes.forEach((pane, i) => {
    const pos = axis === "left" ? pane.offsetLeft : pane.offsetTop;
    const dist = Math.abs(pos - scrollPos);
    if (dist < bestDist) {
      bestDist = dist;
      best = i;
    }
  });
  return best;
};

function usePaneScroll(axis: "left" | "top", edgeOffset: number) {
  const container = useRef<HTMLDivElement>(null);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isScrollStart, setIsScrollStart] = useState(true);

  const syncScrollEdges = () => {
    const el = container.current;
    if (!el) return;

    if (axis === "left") {
      setIsScrollStart(el.scrollLeft <= edgeOffset);
      setIsScrollEnd(
        el.scrollLeft + el.offsetWidth >= el.scrollWidth - edgeOffset
      );
      return;
    }

    setIsScrollStart(el.scrollTop <= edgeOffset);
    setIsScrollEnd(
      el.scrollTop + el.offsetHeight >= el.scrollHeight - edgeOffset
    );
  };

  const getCurrentPaneIndex = () => {
    if (!container.current) return 0;
    const panes = Array.from(container.current.children) as HTMLElement[];
    const scrollPos =
      axis === "left"
        ? container.current.scrollLeft
        : container.current.scrollTop;
    return getNearestPaneIndex(panes, scrollPos, axis);
  };

  const scrollToPane = (index: number) => {
    if (!container.current) return;
    const panes = Array.from(container.current.children) as HTMLElement[];
    const pane = panes[Math.max(0, Math.min(index, panes.length - 1))];
    if (!pane) return;
    // Instant scroll: native smooth + mandatory snap fails backward in Chromium.
    if (axis === "left") {
      container.current.scrollTo({ left: pane.offsetLeft, behavior: "auto" });
    } else {
      container.current.scrollTo({ top: pane.offsetTop, behavior: "auto" });
    }
    syncScrollEdges();
  };

  return {
    container,
    isScrollEnd,
    isScrollStart,
    handleScroll: syncScrollEdges,
    scrollAhead: () => scrollToPane(getCurrentPaneIndex() + 1),
    scrollBack: () => scrollToPane(getCurrentPaneIndex() - 1),
  };
}

export const Steps: FunctionComponent<StepsProps> = ({
  direction = "horizontal",
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
  } = usePaneScroll("left", 15);

  return (
    <section
      onScroll={handleScroll}
      ref={container}
      className={`
        relative
        flex
        h-full
        snap-x
        snap-mandatory
        flex-row 
        items-center
        gap-4
        overflow-scroll
        ${className}
      `}
    >
      {childrenArray.map((child, index) => (
        <section
          key={index}
          className={`
          flex
          h-full
          min-w-full
          snap-center
          snap-always
          flex-row
          items-center
          justify-center
          gap-4
          ${styleSteps}
          `}
        >
          {prevStep && (
            <StepperPrev
              isScrollStart={isScrollStart}
              scrollBack={scrollBack}
              stepper={prevStep}
            />
          )}
          <div className={styleSteps}>{child}</div>
          {nextStep && (
            <StepperNext
              isScrollEnd={isScrollEnd}
              scrollAhead={scrollAhead}
              stepper={nextStep}
            />
          )}
        </section>
      ))}
    </section>
  );
};

export const VerticalSteps: FunctionComponent<StepsProps> = ({
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
  } = usePaneScroll("top", 150);

  return (
    <section
      onScroll={handleScroll}
      ref={container}
      className={`
        relative
        flex
        h-full
        w-full
        snap-y
        snap-mandatory 
        flex-col
        overflow-scroll
        ${className}
      `}
    >
      {childrenArray.map((child, index) => (
        <section
          key={index}
          className={`
          flex
          max-h-full
          min-h-full
          grow
          snap-center
          snap-always
          flex-col
          items-center
          ${prevStep && nextStep ? "justify-between" : "justify-center"}
          overflow-scroll
          px-4
          ${styleSteps}
          `}
        >
          {prevStep && (
            <StepperPrev
              isScrollStart={isScrollStart}
              scrollBack={scrollBack}
              stepper={prevStep}
            />
          )}
          <div className={styleSteps}>{child}</div>
          {nextStep && (
            <StepperNext
              isScrollEnd={isScrollEnd}
              scrollAhead={scrollAhead}
              stepper={nextStep}
            />
          )}
        </section>
      ))}
    </section>
  );
};

const StepperNext: FunctionComponent<{
  scrollAhead: MouseEventHandler<HTMLButtonElement>;
  isScrollEnd: boolean;
  stepper?: ReactNode | string;
}> = ({ isScrollEnd, stepper, scrollAhead }) => {
  const useIcon = typeof stepper === "string";

  return (
    <button
      type="button"
      className={isScrollEnd ? "grow opacity-0" : "grow"}
      onClick={scrollAhead}
      disabled={isScrollEnd}
    >
      {useIcon ? (
        <Icon
          inline
          icon={stepper}
          className="rounded-full bg-slate-100 text-slate-600 hover:bg-slate-400 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-600"
        />
      ) : (
        stepper
      )}
      <span className="sr-only">scroll to next pane</span>
    </button>
  );
};

const StepperPrev: FunctionComponent<{
  scrollBack: MouseEventHandler<HTMLButtonElement>;
  isScrollStart: boolean;
  stepper?: ReactNode | string;
}> = ({ isScrollStart, stepper, scrollBack }) => {
  const useIcon = typeof stepper === "string";

  return (
    <button
      type="button"
      className={isScrollStart ? "grow opacity-0" : "grow"}
      onClick={scrollBack}
      disabled={isScrollStart}
    >
      {useIcon ? (
        <Icon
          inline
          icon={stepper}
          className="rounded-full bg-slate-100 text-slate-600 hover:bg-slate-400 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-600"
        />
      ) : (
        stepper
      )}
      <span className="sr-only">scroll to previous pane</span>
    </button>
  );
};
