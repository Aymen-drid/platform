"use client";

import { useState, useEffect, ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import React from "react";
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 if (!isClient) {
  return <div>{children}</div>
 }
  return (
    <NextThemesProvider >
      {children}
    </NextThemesProvider>
  );
}
