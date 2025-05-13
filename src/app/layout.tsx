import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morgan Huberty",
  description: "Personal website of Morgan Huberty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body
        className="min-h-screen bg-white text-black"
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
