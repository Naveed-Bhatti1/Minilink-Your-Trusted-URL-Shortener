"use client";
import React, { useState } from "react";

const shorten = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      URL: url,
      shortURL: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/shorten", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div className="shorten max-w-lg mx-auto p-4 rounded-2xl border border-black/10 shadow-lg shadow-black/20 mt-40 pb-10 flex flex-col gap-6 ">
      <h1 className="text-2xl font-bold text-center pt-3 ">
        Generate your Short URLs
      </h1>
      <div className="input w-4/5 flex flex-col gap-3 mx-auto">
        <input
          type="text"
          value={url}
          onChange={(e) => seturl(e.target.value)}
          className="bg-blue-500 w-full py-2 rounded-lg px-3 "
          placeholder="Enter Your URL"
        />
        <input
          type="text"
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
          className="bg-blue-500 w-full py-2 rounded-lg px-3 "
          placeholder="Enter Your preffered Short URL (optional)"
        />

        <button
          onClick={generate}
          className="text-white cursor-pointer bg-gradient-to-r from-blue-400 mt-4  to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center "
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default shorten;
