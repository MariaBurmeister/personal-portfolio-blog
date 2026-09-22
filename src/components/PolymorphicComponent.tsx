import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type PolymorphicProps<
  TElement extends ElementType = "section",
  TOwnProps = {},
> = TOwnProps &
  Omit<ComponentPropsWithoutRef<TElement>, keyof TOwnProps> & {
    as?: TElement;
  };

export type BaseProps<
  T extends ElementType = "section",
  TOwnProps = {},
> = PolymorphicProps<T, TOwnProps>;

export function Base<T extends ElementType = "section", TOwnProps = {}>({
  as,
  ...props
}: BaseProps<T, TOwnProps>) {
  const Component = as ?? "section";
  return <Component {...props} />;
}
