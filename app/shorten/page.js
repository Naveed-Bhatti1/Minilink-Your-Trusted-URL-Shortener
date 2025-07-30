"use client";
import React, { useState } from "react";

const shorten = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="shorten w-1/2 mx-auto p-4 rounded-2xl border border-black/10 shadow-lg shadow-black/20 mt-40 pb-20 ">
      <h1 className="text-2xl font-bold my-5 text-center">Generate your Short URLs</h1>
      <div className="input w-2/3 flex flex-col gap-6 mx-auto">
        <input
          type="text"
          value={url}
          onChange={handleChange}
          className="bg-blue-500 w-full py-2 rounded-lg px-3 text-lg"
          placeholder="Enter Your URL"
        />
        <input
          type="text"
          value={shortUrl}
          onChange={handleChange}
          className="bg-blue-500 w-full py-2 rounded-lg px-3 text-lg"
          placeholder="Enter Your preffered Short URL (optional)"
        />

        <button className="text-white cursor-pointer bg-gradient-to-r from-blue-400  to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
          Shorten
        </button>
      </div>
    </div>
  );
};

export default shorten;
