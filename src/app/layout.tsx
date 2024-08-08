import "@/styles/globals.css";

import { Toaster } from '@pheralb/toast';
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "grids - the minimal selfmail client",
  description: "Grids is a minimalistic, selfhostable and open source selfmail client.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex justify-center">
        <ThemeProvider enableSystem attribute="class" defaultTheme="dark" disableTransitionOnChange >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
