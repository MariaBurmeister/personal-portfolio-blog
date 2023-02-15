import { FunctionComponent, ReactNode, Children } from "react";

interface Steps {
  direction?: "horizontal" | "vertical";
  children: ReactNode;
  styleSteps?: string;
  className?: string;

  nextStep?: ReactNode;
  prevStep?: ReactNode;
}

export const Steps: FunctionComponent<Steps> = ({
  direction = "vertical",
  className,
  styleSteps,
  children,
  nextStep,
  prevStep,
}) => {
  const childrenArray = Children.toArray(children);

  const isHorizontal = direction === "horizontal";
  const isVertical = direction === "vertical";
  const directionStyles = isHorizontal
    ? `
    snap-x 
    auto-cols-[100%] 
    grid-flow-col
    `
    : `
    snap-y
    auto-rows-[100%]
    grid-flow-row
    `;

  return (
    <section
      className={`
      relative
        grid
        snap-mandatory 
        items-center 
        gap-4  

        overflow-scroll
        ${directionStyles}
        ${className}
      `}
    >
      {childrenArray.map((child, index) => (
        <section
          key={index}
          className={`
          relative

          snap-center   
          snap-always

          self-center
          justify-self-center 
          ${styleSteps}
          `}
        >
          {prevStep && index > 0 && (
            <HalfStep direction={direction} step="prev" index={index}>
              {prevStep}
            </HalfStep>
          )}
          {child}
          {nextStep && index < childrenArray.length - 1 && (
            <HalfStep direction={direction} step="next" index={index}>
              {nextStep}
            </HalfStep>
          )}
        </section>
      ))}
    </section>
  );
};

const HalfStep: FunctionComponent<{
  direction: "horizontal" | "vertical";
  step: "next" | "prev";
  index: number;
  children: ReactNode;
}> = ({ direction, step, children }) => {
  const isVertical = direction === "vertical";

  const isNext = step === "next";

  const prevStepDirectionStyles = isVertical
    ? `m-auto bottom-[100%] w-full `
    : `top-[50%] -ml-[56%] -translate-y-1/2`;
  const nextStepDirectionStyles = isVertical
    ? `m-auto w-full `
    : `top-[50%] ml-[52%] -translate-y-1/2`;

  return (
    <button
      onClick={(e) => {
        const nextPane = e.currentTarget.parentElement?.nextElementSibling;
        const prevPane = e.currentTarget.parentElement?.previousElementSibling;
        const targetPane = isNext ? nextPane : prevPane;
        targetPane?.scrollIntoView({ behavior: "smooth" });
      }}
      className={`absolute ${
        isNext ? nextStepDirectionStyles : prevStepDirectionStyles
      } `}
    >
      <span className="sr-only">
        scroll to {isNext ? "next" : "previous"} pane
      </span>
      {children}
    </button>
  );
};
