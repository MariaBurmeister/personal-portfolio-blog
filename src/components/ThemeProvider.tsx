"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ReactNode } from "react";
import { THEME_COLORS } from "@/theme-colors";

function ThemeColorSync() {
  const { resolvedTheme } = useTheme();

  if (resolvedTheme !== "light" && resolvedTheme !== "dark") return null;

  return <meta name="theme-color" content={THEME_COLORS[resolvedTheme]} />;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeColorSync />
      {children}
    </NextThemesProvider>
  );
}
