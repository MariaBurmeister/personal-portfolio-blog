"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useEffect, type ReactNode } from "react";
import { THEME_COLORS } from "@/theme-colors";

function ThemeColorSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme !== "light" && resolvedTheme !== "dark") return;

    const color = THEME_COLORS[resolvedTheme];
    const metas = [
      ...document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]'),
    ];

    const [meta, ...extras] = metas;
    extras.forEach((el) => el.remove());

    if (!meta) {
      const created = document.createElement("meta");
      created.name = "theme-color";
      created.content = color;
      document.head.appendChild(created);
      return;
    }

    meta.removeAttribute("media");
    meta.content = color;
  }, [resolvedTheme]);

  return null;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeColorSync />
      {children}
    </NextThemesProvider>
  );
}
