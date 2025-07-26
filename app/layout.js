import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MiniLink – Your Trusted URL Shortener",
  description:
    "MiniLink is a secure and reliable URL shortening service built with Next.js 15. Easily shorten long links and share them with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-white antialiased relative min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden`}
      >
        <Navbar />
        {children}
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white to-transparent" />
      </body>
    </html>
  );
}
