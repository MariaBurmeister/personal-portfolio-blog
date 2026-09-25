import { ReactElement, ReactNode, ViewTransition } from "react";
import { Base, BaseProps, PolymorphicProps } from "../PolymorphicComponent";

type PanelElement =
  "nav" | "header" | "section" | "aside" | "main" | "article" | "footer";

type Variant = "inline-start" | "inline-end";

const panelVariantClass: Record<Variant, string> = {
  "inline-start": "inline-start",
  "inline-end": "inline-end",
};

const inlineStartStyles = {
  "side-content":
    "group-[.side-content]/page:bg-white group-[.side-content]/page:shadow-2xl dark:group-[.side-content]/page:bg-slate-900",
  "content-side":
    "group-[.content-side]/page:bg-linear-to-b group-[.content-side]/page:from-white group-[.content-side]/page:to-purple-100 dark:group-[.content-side]/page:from-slate-900 dark:group-[.content-side]/page:to-purple-950",
};

const inlineEndStyles = {
  "side-content":
    "group-[.side-content]/page:bg-linear-to-b group-[.side-content]/page:from-white group-[.side-content]/page:to-purple-100 dark:group-[.side-content]/page:from-slate-900 dark:group-[.side-content]/page:to-purple-950",
  "content-side":
    "group-[.content-side]/page:bg-white group-[.content-side]/page:shadow-2xl dark:group-[.content-side]/page:bg-slate-900",
};

const panelStylesClass: Record<Variant, string> = {
  "inline-start": `${inlineStartStyles["side-content"]} ${inlineStartStyles["content-side"]}`,
  "inline-end": `${inlineEndStyles["side-content"]} ${inlineEndStyles["content-side"]}`,
};

const baseLayoutStyles: Record<Variant, string> = {
  "inline-start":
    "group-[.content-side]/page:h-[min(70dvh,36rem)] group-[.content-side]/page:max-h-[calc(100dvh-8rem)] group-[.content-side]/page:min-h-[min(28rem,calc(100dvh-8rem))] group-[.content-side]/page:overflow-hidden",
  "inline-end":
    "group-[.side-content]/page:h-[min(70dvh,36rem)] group-[.side-content]/page:max-h-[calc(100dvh-8rem)] group-[.side-content]/page:min-h-[min(28rem,calc(100dvh-8rem))] group-[.side-content]/page:overflow-hidden",
};

const groupSideContentLayoutStyles: Record<Variant, string> = {
  "inline-start":
    "group-[.side-content]/page:grow group-[.side-content]/page:md:grow-0 group-[.side-content]/page:md:w-80 group-[.side-content]/page:md:min-w-80 group-[.side-content]/page:md:shrink-0",
  "inline-end":
    "group-[.side-content]/page:grow group-[.side-content]/page:min-w-0",
};

const groupContentSideLayoutStyles: Record<Variant, string> = {
  "inline-start":
    "group-[.content-side]/page:grow group-[.content-side]/page:min-w-0",
  "inline-end":
    "group-[.content-side]/page:grow group-[.content-side]/page:md:grow-0 group-[.content-side]/page:md:w-80 group-[.content-side]/page:md:min-w-80",
};

const panelBaseStyles = "relative rounded-xl";

const groupPanelStyles: Record<Variant, string> = {
  "inline-start":
    "group-[.content-side]/page:px-4 group-[.content-side]/page:shadow-2xl",
  "inline-end":
    "group-[.side-content]/page:px-4 group-[.side-content]/page:shadow-2xl",
};

interface PanelOwnProps {
  variant?: Variant;
  className?: string;
}

export const Panel = ({
  variant = "inline-start",
  className,
  as = "section",
  ...props
}: BaseProps<PanelElement> & PanelOwnProps) => {
  return (
    <ViewTransition name={`panel-${variant}`} share="panel">
      <Base
        as={as}
        className={[
          panelVariantClass[variant],
          panelBaseStyles,
          panelStylesClass[variant],
          groupPanelStyles[variant],
          baseLayoutStyles[variant],
          groupSideContentLayoutStyles[variant],
          groupContentSideLayoutStyles[variant],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    </ViewTransition>
  );
};

///

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingSize = "sm" | "md" | "lg";
type HeadingOwnProps = {
  size?: HeadingSize;
};

export function Heading({
  as = "h2",
  size = "md",
  className,
  ...props
}: BaseProps<HeadingElement, HeadingOwnProps>) {
  const sizeStyles: Record<HeadingSize, string> = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };
  return (
    <Base as={as} {...props} className={`${sizeStyles[size]} ${className}`} />
  );
}
