"use client";
import { Icon } from "@iconify/react";
import {
  FunctionComponent,
  ReactNode,
  Children,
  useRef,
  UIEvent,
  useEffect,
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

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (!container.current) return;
    container.current.addEventListener("scrollstart", (event) => {
      setIsScrolling(true);
      console.log("scrollstart");
    });
    container.current.addEventListener("scrollend", (event) => {
      setIsScrolling(false);
      console.log("scrollend");
    });
  }, [container]);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (hasReachedEnd(container, 15)) {
      setIsScrollEnd(true);
      console.log("end");
      return;
    } else if (hasReachedStart(container, 15)) {
      setIsScrollStart(true);
      console.log("start");
      return;
    }
    setIsScrollEnd(false);
    setIsScrollStart(false);
  };

  const hasReachedEnd = (
    container: RefObject<HTMLDivElement>,
    offset: number
  ) => {
    if (!container.current) return;
    return (
      container.current.scrollLeft + container.current.offsetWidth >=
      container.current.scrollWidth - offset
    );
  };

  const hasReachedStart = (
    container: RefObject<HTMLDivElement>,
    offset: number
  ) => {
    if (!container.current) return;
    return container.current.scrollLeft <= offset;
  };

  const scrollAhead = () => {
    if (!container.current) return;
    console.log("scrolling ahead");
    container.current.scrollBy({
      left: container.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollBack = () => {
    if (!container.current) return;
    console.log("scrolling back");
    container.current.scrollBy({
      left: -container.current.offsetWidth,
      behavior: "smooth",
    });
  };

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
          {nextStep && (
            <StepperPrev
              direction={direction}
              isScrollStart={isScrollStart}
              scrollBack={scrollBack}
              stepper={prevStep}
            />
          )}
          <main className={styleSteps}>{child}</main>
          {prevStep && (
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

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (!container.current) return;
    container.current.addEventListener("scrollstart", (event) => {
      setIsScrolling(true);
      console.log("scrollstart");
    });
    container.current.addEventListener("scrollend", (event) => {
      setIsScrolling(false);
      console.log("scrollend");
    });
  }, [container]);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (hasReachedEnd(container, 150)) {
      setIsScrollEnd(true);
      console.log("end");
      return;
    } else if (hasReachedStart(container, 150)) {
      setIsScrollStart(true);
      console.log("start");
      return;
    }
    setIsScrollEnd(false);
    setIsScrollStart(false);
  };

  const hasReachedEnd = (
    container: RefObject<HTMLDivElement>,
    offset: number
  ) => {
    if (!container.current) return;
    return (
      container.current.scrollTop + container.current.offsetHeight >=
      container.current.scrollHeight - offset
    );
  };

  const hasReachedStart = (
    container: RefObject<HTMLDivElement>,
    offset: number
  ) => {
    if (!container.current) return;
    return container.current.scrollTop <= offset;
  };

  const scrollAhead = () => {
    if (!container.current) return;
    console.log("scrolling ahead");
    container.current.scrollBy({
      top: container.current.offsetHeight,
      behavior: "smooth",
    });
  };

  const scrollBack = () => {
    if (!container.current) return;
    console.log("scrolling back");
    container.current.scrollBy({
      top: -container.current.offsetHeight,
      behavior: "smooth",
    });
  };

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
          <main className={styleSteps}>{child}</main>
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
  isScrolling?: boolean;
  stepper?: ReactNode | string;
}> = ({
  direction = "horizontal",
  isScrollEnd,
  isScrolling,
  stepper,
  scrollAhead,
}) => {
  const isHorizontal = direction === "horizontal";

  const useIcon = typeof stepper === "string";

  return (
    <button
      className={isScrollEnd || isScrolling ? "grow opacity-0" : "grow"}
      onClick={scrollAhead}
      disabled={isScrollEnd}
    >
      {useIcon ? (
        <Icon
          inline
          icon={stepper}
          className="rounded-full bg-slate-100 text-slate-600 hover:bg-slate-400"
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
  isScrolling?: boolean;
  stepper?: ReactNode | string;
}> = ({ direction, isScrollStart, isScrolling, stepper, scrollBack }) => {
  const isHorizontal = direction === "horizontal";

  const useIcon = typeof stepper === "string";

  return (
    <button
      className={isScrollStart || isScrolling ? "grow opacity-0" : "grow"}
      onClick={scrollBack}
      disabled={isScrollStart}
    >
      {useIcon ? (
        <Icon
          inline
          icon={stepper}
          className="rounded-full bg-slate-100 text-slate-600 hover:bg-slate-400"
        />
      ) : (
        stepper
      )}
      <span className="sr-only">scroll to previous pane</span>
    </button>
  );
};
