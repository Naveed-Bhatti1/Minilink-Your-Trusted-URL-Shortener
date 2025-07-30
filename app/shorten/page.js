"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    if (!url.trim()) {
      toast.error("Please enter a URL to shorten");
      return;
    }

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ URL: url, shortURL: shortUrl }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setGenerated(`${process.env.NEXT_PUBLIC_BASE_URL}/${result.shortURL}`);
      setUrl("");
      setShortUrl("");
      toast.success(result.message || "Short URL generated!");
    } catch (error) {
      toast.error(error.message || "Failed to shorten URL");
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generated);
      toast.info("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy URL");
    }
  };

  return (
    <main className="min-h-[calc(100vh-100px)] p-4 flex items-center justify-center bg-transparent">
      <ToastContainer theme="dark" />

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-md shadow-black/30">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-white mb-6">
          🔗 Generate Your Short URLs
        </h1>

        {/* Input Fields */}
        <div className="flex flex-col gap-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your long URL"
            className="w-full py-2.5 px-4 bg-blue-500/70 text-white placeholder-white/60 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
          />

          <input
            type="text"
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
            placeholder="Custom short path "
            className="w-full py-2.5 px-4 bg-blue-500/70 text-white placeholder-white/60 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
          />

          <button
            onClick={generate}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-2.5 rounded-lg transition-all text-sm sm:text-base"
          >
            Generate
          </button>
        </div>

        {/* Generated Link */}
        {generated && (
          <div className="mt-6 text-center">
            <p className="text-white font-medium text-base sm:text-lg mb-2">
              Your short link:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={generated}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 underline break-words max-w-full"
              >
                {generated}
              </Link>
              <button
                onClick={copyToClipboard}
                className="text-xs sm:text-sm text-white border border-blue-400 px-3 py-1.5 rounded-md hover:bg-blue-600 transition"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Shorten;
