"use client";
import { Icon } from "@iconify/react";
import {
  FunctionComponent,
  ReactNode,
  Children,
  useRef,
  useState,
  RefObject,
  MouseEventHandler,
} from "react";

interface Steps {
  direction?: "horizontal" | "vertical";
  children: ReactNode;
  styleSteps?: string;
  className?: string;

  nextStep?: ReactNode | string;
  prevStep?: ReactNode | string;
}

export const Steps: FunctionComponent<Steps> = ({
  direction = "horizontal",
  className,
  styleSteps,
  children,
  nextStep,
  prevStep,
}) => {
  const childrenArray = Children.toArray(children);
  const container = useRef<HTMLDivElement>(null);

  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isScrollStart, setIsScrollStart] = useState(true);

  const syncScrollEdges = () => {
    setIsScrollStart(!!hasReachedStart(container, 15));
    setIsScrollEnd(!!hasReachedEnd(container, 15));
  };

  const handleScroll = () => {
    syncScrollEdges();
  };

  const hasReachedEnd = (
    container: RefObject<HTMLDivElement | null>,
    offset: number
  ) => {
    if (!container.current) return;
    return (
      container.current.scrollLeft + container.current.offsetWidth >=
      container.current.scrollWidth - offset
    );
  };

  const hasReachedStart = (
    container: RefObject<HTMLDivElement | null>,
    offset: number
  ) => {
    if (!container.current) return;
    return container.current.scrollLeft <= offset;
  };

  const getCurrentPaneIndex = () => {
    if (!container.current) return 0;
    const panes = Array.from(container.current.children) as HTMLElement[];
    const { scrollLeft } = container.current;
    let best = 0;
    let bestDist = Infinity;
    panes.forEach((pane, i) => {
      const dist = Math.abs(pane.offsetLeft - scrollLeft);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  };

  const scrollToPane = (index: number) => {
    if (!container.current) return;
    const panes = Array.from(container.current.children) as HTMLElement[];
    const pane = panes[Math.max(0, Math.min(index, panes.length - 1))];
    if (!pane) return;
    // Instant scroll: native smooth + mandatory snap fails backward in Chromium.
    container.current.scrollTo({ left: pane.offsetLeft, behavior: "auto" });
    syncScrollEdges();
  };

  const scrollAhead = () => scrollToPane(getCurrentPaneIndex() + 1);
  const scrollBack = () => scrollToPane(getCurrentPaneIndex() - 1);

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
              direction={direction}
              isScrollStart={isScrollStart}
              scrollBack={scrollBack}
              stepper={prevStep}
            />
          )}
          <div className={styleSteps}>{child}</div>
          {nextStep && (
            <StepperNext
              direction={direction}
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
export const VerticalSteps: FunctionComponent<Steps> = ({
  direction = "vertical",
  className,
  styleSteps,
  children,
  nextStep,
  prevStep,
}) => {
  const childrenArray = Children.toArray(children);
  const container = useRef<HTMLDivElement>(null);

  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isScrollStart, setIsScrollStart] = useState(true);

  const syncScrollEdges = () => {
    setIsScrollStart(!!hasReachedStart(container, 150));
    setIsScrollEnd(!!hasReachedEnd(container, 150));
  };

  const handleScroll = () => {
    syncScrollEdges();
  };

  const hasReachedEnd = (
    container: RefObject<HTMLDivElement | null>,
    offset: number
  ) => {
    if (!container.current) return;
    return (
      container.current.scrollTop + container.current.offsetHeight >=
      container.current.scrollHeight - offset
    );
  };

  const hasReachedStart = (
    container: RefObject<HTMLDivElement | null>,
    offset: number
  ) => {
    if (!container.current) return;
    return container.current.scrollTop <= offset;
  };

  const getCurrentPaneIndex = () => {
    if (!container.current) return 0;
    const panes = Array.from(container.current.children) as HTMLElement[];
    const { scrollTop } = container.current;
    let best = 0;
    let bestDist = Infinity;
    panes.forEach((pane, i) => {
      const dist = Math.abs(pane.offsetTop - scrollTop);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  };

  const scrollToPane = (index: number) => {
    if (!container.current) return;
    const panes = Array.from(container.current.children) as HTMLElement[];
    const pane = panes[Math.max(0, Math.min(index, panes.length - 1))];
    if (!pane) return;
    container.current.scrollTo({ top: pane.offsetTop, behavior: "auto" });
    syncScrollEdges();
  };

  const scrollAhead = () => scrollToPane(getCurrentPaneIndex() + 1);
  const scrollBack = () => scrollToPane(getCurrentPaneIndex() - 1);

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
          ${
            prevStep && nextStep ? "justify-between" : "justify-center"
          }          
          overflow-scroll
          px-4
          ${styleSteps}
          `}
        >
          {prevStep && (
            <StepperPrev
              direction={direction}
              isScrollStart={isScrollStart}
              scrollBack={scrollBack}
              stepper={prevStep}
            />
          )}
          <div className={styleSteps}>{child}</div>
          {nextStep && (
            <StepperNext
              direction={direction}
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
  direction?: "horizontal" | "vertical";
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
  direction?: "horizontal" | "vertical";
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
