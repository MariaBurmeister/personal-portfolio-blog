import { FunctionComponent, ReactNode } from "react";

interface Card {
  rounded?: "sm" | "md" | "lg" | "xl";
  shadow?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  className?: string;
  title: string | ReactNode;
  titleHelp?: string | ReactNode;
  hideTitle?: boolean;
  children: ReactNode;
  styleContent?: string;
  footer?: ReactNode;
  styleFooter?: string;
  // clampContent?: boolean;
}

// at least a label is required for accessibility, but a title is preferred.
// if a title is not provided, the label will be used as the title, but will be hidden from view.

// the className prop is used to apply custom styles to the containing article element (Card).

// the styleContent prop is used to apply custom styles to the main content element (children-container).

// the footer prop is used to render a footer element at the bottom of the card.
// the styleFooter prop is used to apply custom styles to the footer element.

export const Card: FunctionComponent<Card> = ({
  className,
  rounded,
  shadow,
  title,
  hideTitle,
  titleHelp,
  children,
  styleContent,
  footer,
  styleFooter,
  // clampContent = false,
}) => {
  return (
    <article
      className={`
      relative 
      rounded ${rounded ?? `rounded-${rounded}`} 
      border border-purple-900 
      bg-gradient-to-b from-white to-purple-100 
      p-4 
      text-purple-900 
      ${shadow ?? `shadow-${shadow}`}  shadow-purple-200 
      ${className}
    `}
    >
      <header className="flex max-w-full items-center justify-between gap-4">
        <h4
          className={`${
            hideTitle ? "sr-only" : ""
          } max-w-full shrink text-ellipsis break-words font-bold line-clamp-1`}
        >
          {title}
        </h4>
        {titleHelp && <p className="text-xs">{titleHelp}</p>}
      </header>
      <hr className="my-1" />
      <main className={`font-baskervville ${styleContent}`}>{children}</main>
      <hr className="my-1" />
      {footer && <footer className={`${styleFooter}`}>{footer}</footer>}
    </article>
  );
};
