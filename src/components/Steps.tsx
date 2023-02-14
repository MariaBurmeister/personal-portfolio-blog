import { FunctionComponent, ReactNode, Children } from "react";

interface Steps {
  //   direction?: "horizontal" | "vertical";
  children: ReactNode;
  styleSteps?: string;
  className?: string;
  halfStep?: ReactNode;
  halfStepBaseline?: number;
}

export const Steps: FunctionComponent<Steps> = ({
  //   direction = "vertical",
  className,
  styleSteps,
  children,
  halfStep,
  halfStepBaseline = 50,
}) => {
  const childrenArray = Children.toArray(children);

  return (
    <section
      className={`
      relative
    grid 
    snap-y 
    snap-mandatory 
    grid-flow-row 
    auto-rows-[100%] 
    items-center
    gap-4  
    overflow-scroll
      ${className}`}
    >
      {childrenArray.map((child, index) => (
        <section
          key={index}
          className={`
          relative
          snap-center
          snap-always   
          ${styleSteps}
          `}
        >
          {child}
          {halfStep && index < childrenArray.length - 1 && (
            <div
              className={`-bottom-[${halfStepBaseline}%] absolute m-auto w-full`}
            >
              {halfStep}
            </div>
          )}
        </section>
      ))}
    </section>
  );
};
