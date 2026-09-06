"use client";

import { createAuthClient } from "@neondatabase/auth/next";
import { NeonAuthUIProvider } from "@neondatabase/auth/react/ui";
import { ThemeProvider } from "next-themes";

const authClient = createAuthClient();

export function NeonAuthProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      forcedTheme="dark"
      enableSystem={false}
      enableColorScheme
    >
      <NeonAuthUIProvider
        authClient={authClient}
        defaultTheme="dark"
        className="flex flex-1 flex-col"
      >
        {children}
      </NeonAuthUIProvider>
    </ThemeProvider>
  );
}
