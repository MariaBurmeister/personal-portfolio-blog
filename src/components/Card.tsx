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

// a card is a container for content.
// it has a title, a main content area and a footer.

// a title is required for accessibility reasons. Yup, even if you don't want to show it. You can hide it with the hideTitle prop.

// the rounded prop is used to apply a border radius to the card.
// the shadow prop is used to apply a box shadow to the card.

// the className prop is used to apply custom styles to the Card (<article/>).

// the styleContent prop is used to apply custom styles to the content (<main/>).

// the footer prop is used to render content inside a <footer/> at the bottom of the card.
// the styleFooter prop is used to apply custom styles to the footer (<footer/>).

// TODO: replace <hr/> with divide tailwind class

export const Card: FunctionComponent<Card> = ({
  className,
  rounded,
  shadow = "lg",
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
      ${shadow ? `shadow-${shadow}` : ""}  shadow-purple-200 
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
