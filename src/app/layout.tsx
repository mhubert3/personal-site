import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Morgan Huberty",
  description: "Personal website of Morgan Huberty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode}>) {
  return (
    <html lang="en">
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
