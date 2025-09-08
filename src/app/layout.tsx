import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Masonry portfolio with GSAP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
