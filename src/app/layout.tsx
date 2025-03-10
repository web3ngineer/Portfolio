import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import ResponsiveNav from "@/components/navbar/ResponsiveNav";
import Footer from "@/components/Footer";

// Using JetBrains Mono for a code-like monospace font
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A minimalist developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono bg-white dark:bg-black`}>
        <ThemeProvider>
          <ResponsiveNav />
          <div className="pb-0 md:pb-20 bg-white dark:bg-black"></div>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
