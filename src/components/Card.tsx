import { FunctionComponent, ReactNode } from "react";

interface Card {
  rounded?: "sm" | "md" | "lg" | "xl";
  className?: string;
  title?: string;
  titleHelp?: string;
  label: string;
  children: ReactNode;
  styleContent?: string;
  footer?: ReactNode;
  styleFooter?: string;
}

// at least a label is required for accessibility, but a title is preferred.
// if a title is not provided, the label will be used as the title, but will be hidden from view.

// the className prop is used to apply custom styles to the containing article element (Card).

// the styleContent prop is used to apply custom styles to the main content element (children-container).

// the footer prop is used to render a footer element at the bottom of the card.
// the styleFooter prop is used to apply custom styles to the footer element.

export const Card: FunctionComponent<Card> = ({
  className,
  rounded = "xl",
  title,
  titleHelp,
  label,
  children,
  styleContent,
  footer,
  styleFooter,
}) => {
  return (
    <article
      className={`
      relative
      rounded rounded-${rounded} 
      border border-purple-900  
      p-4
    text-purple-900
      shadow-lg shadow-purple-200
      ${className}
    `}
    >
      <header className="flex max-w-full items-center justify-between">
        <h4
          className={`${
            title ? "" : "sr-only"
          } max-w-full shrink text-ellipsis break-words  font-bold line-clamp-1`}
        >
          {title || label}
        </h4>
        {titleHelp && <p className="text-xs">{titleHelp}</p>}
      </header>
      <hr className="my-1" />
      <main className={`${styleContent}`}>{children}</main>
      <hr className="my-1" />
      {footer && <footer className={`${styleFooter}`}>{footer}</footer>}
    </article>
  );
};
