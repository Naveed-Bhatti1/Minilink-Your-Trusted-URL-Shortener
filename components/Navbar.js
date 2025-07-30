"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 backdrop-blur-sm bg-white/10 border-b border-white/10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              🔗 MiniLink
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href={"/github"}>
              <button
                type="button"
                className="text-white  cursor-pointer bg-gradient-to-r from-blue-500  to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                GitHub
              </button>
            </Link>
            <Link href={"/shorten"}>
              <button
                type="button"
                className="text-white  cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Try Now
              </button>
            </Link>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <Link
                  href={"/"}
                  className={`block py-2 px-3 rounded-sm ${
                    pathname === "/"
                      ? "text-blue-300 font-semibold underline"
                      : "text-white"
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/shorten"}
                  className={`block py-2 px-3 rounded-sm ${
                    pathname === "/shorten"
                      ? "text-blue-300 font-semibold underline"
                      : "text-white"
                  }`}
                >
                  Shortener
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className={`block py-2 px-3 rounded-sm ${
                    pathname === "/about"
                      ? "text-blue-300 font-semibold underline"
                      : "text-white"
                  }`}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href={"/contact"}
                  className={`block py-2 px-3 rounded-sm ${
                    pathname === "/contact"
                      ? "text-blue-300 font-semibold underline"
                      : "text-white"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
