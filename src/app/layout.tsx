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
  title: "Web3ngineer - Shivam Singh",
  description: "A minimalist developer portfolio showcasing skills, projects, and experience.",
  icons: {
    icon:[
      '/public/favicon.ico?v=1',
    ],
    apple:[
      '/public/apple-touch-icon.png?v=4',
    ],
    shortcut:[
      '/public/apple-touch-icon.png?v=4', // for iOS <  12.3; safari on iOS should get this if they
    ], 
  },
  manifest:'/public/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description || ''} />
        <meta name="keywords" content="Full Stack Developer, Portfolio, Web Development, React, Node.js" />
        <meta name="author" content="Shivam Singh" />
      </head>
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
