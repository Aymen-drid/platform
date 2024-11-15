"use client"

import { useState,useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider() {
  const [isMounted, setIsMounted] = useState(false);

  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
   
    return null;
  }
  return <NextThemesProvider >{children}</NextThemesProvider>
}
