"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/10 border-b border-white/10">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          🔗 MiniLink
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-gray-300 hover:bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:items-center transition-all duration-200 ease-in-out`}
          id="navbar"
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0 text-white font-medium">
            {[
              { name: "Home", href: "/" },
              { name: "Shortener", href: "/shorten" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 rounded-md ${
                    pathname === link.href
                      ? "text-blue-300 font-semibold underline"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-0 md:ml-6">
            <Link href="https://github.com/Naveed-Bhatti1/Minilink-Your-Trusted-URL-Shortener">
              <button className="w-full md:w-auto text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all">
                GitHub
              </button>
            </Link>
            <Link href="/shorten">
              <button className="w-full md:w-auto text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all">
                Try Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
