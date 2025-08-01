"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
      <h1 className="text-5xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="text-lg mb-6">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-md transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
