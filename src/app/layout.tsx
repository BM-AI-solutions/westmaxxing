import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or choose a more thematic font if desired
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster"; // Keep toaster for notifications

// Example: Using Inter font, but you could swap for a more gothic/tech font
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Decision Points - Autonomous Income",
  description: "Observe the AI autonomously generate passive income.",
  // Add theme color for browser UI theming
  themeColor: "#0a0a0a", // infernal.black
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark", // Enforce dark mode
          fontSans.variable
        )}
      >
        {/* Toaster remains for system notifications */}
        <Toaster />
        {/* Main content area */}
        <main className="relative flex min-h-screen flex-col">
           {/* You might add persistent elements like a header/sidebar here later */}
           {children}
        </main>
      </body>
    </html>
  );
}