import type { Metadata } from "next";
import { Anek_Latin, Inter } from "next/font/google";
import "./globals.css";

const anekLatin = Anek_Latin({
  subsets: ["latin"],
  variable: "--font-anek-latin",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TICKPIN - Discover Incredible Events",
  description: "Your gateway to world-class sports and entertainment.",
};

import LoadingTransition from "@/components/layout/LoadingTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anekLatin.variable} ${inter.variable} font-sans antialiased`}>
        <LoadingTransition>
          {children}
        </LoadingTransition>
      </body>
    </html>
  );
}
