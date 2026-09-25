/** Joins truthy class tokens into a single className string. */
export function cClass(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}
