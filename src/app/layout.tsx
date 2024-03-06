import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNavbar } from "../components/usedNav";
import { OverviewPage } from "../customcompeonet/Overview";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {};

export default function RootLayout({
  children,
  showNavbar = false, // Default to true if not provided
}: Readonly<{
  children: React.ReactNode;
  showNavbar?: boolean; // Define showNavbar as an optional prop
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Pass showNavbar prop to MainNavbar */}
          <MainNavbar showNavbar={showNavbar} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
