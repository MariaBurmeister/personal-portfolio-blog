"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore, type FunctionComponent } from "react";
import { BsCircleHalf, BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const emptySubscribe = () => () => {};

const nextTheme = {
  system: "light",
  light: "dark",
  dark: "system",
} as const;

const themeCopy = {
  system: {
    label: "Using system theme. Switch to light",
    icon: BsCircleHalf,
  },
  light: {
    label: "Using light theme. Switch to dark",
    icon: BsSunFill,
  },
  dark: {
    label: "Using dark theme. Switch to system",
    icon: BsMoonStarsFill,
  },
} as const;

type ThemeName = keyof typeof nextTheme;

const isThemeName = (value: string | undefined): value is ThemeName =>
  value === "system" || value === "light" || value === "dark";

export const ThemeToggle: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const current: ThemeName = mounted && isThemeName(theme) ? theme : "system";
  const { label, icon: Icon } = themeCopy[current];

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme[current])}
      className={`justify-self-end rounded-full bg-purple-100 p-2 text-purple-600 ring-2 ring-purple-600 ring-offset-2 transition hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:ring-purple-300 dark:ring-offset-slate-900 dark:hover:bg-purple-800 ${className ?? ""}`}
      aria-label={label}
      title={label}
    >
      <Icon className="text-lg" aria-hidden />
    </button>
  );
};
