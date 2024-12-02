import localFont from "next/font/local";
import "./globals.css";
import Header from "./Header";

import { ThemeProvider } from "next-themes";
import Loading from "./components/ui/loading";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ThemeProvider automatically handles hydration */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading />}>
           
            {children}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
