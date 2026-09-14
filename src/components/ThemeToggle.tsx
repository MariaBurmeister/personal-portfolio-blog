"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, type FunctionComponent } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export const ThemeToggle: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`justify-self-end rounded-full bg-purple-100 p-2 text-purple-600 ring-2 ring-purple-600 ring-offset-2 transition hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:ring-purple-300 dark:ring-offset-slate-900 dark:hover:bg-purple-800 ${className ?? ""}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <BsSunFill className="text-lg" aria-hidden />
      ) : (
        <BsMoonStarsFill className="text-lg" aria-hidden />
      )}
    </button>
  );
};
