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
    <html
      lang="en"
      className="min-h-screen bg-[radial-gradient(125%_125%_at_50%_10%,#2550fa_40%,#fff_100%)] text-white"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} mt-24 
`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
