import type {Metadata} from "next";
import {Inter, DM_Sans} from "next/font/google";
import "./globals.css";

import {ClerkProvider} from "@clerk/nextjs"
import {dark} from "@clerk/themes";
import {ThemeProvider} from "@/providers/theme-provider";

const inter = DM_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "MacroEncode Plura",
  description: "All in one Agency Solution",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      </body>
      </html>
    </ClerkProvider>

  );
}
