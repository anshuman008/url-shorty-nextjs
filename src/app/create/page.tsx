"use client";
import Link from "next/link";
import shortenURL from "../serverActions/ShortenUrlAction"; 
import { useState } from "react";

export default function Home() {
  const [shortUrl, setShortenUrl] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [loading,setLoading] = useState(false);
  const fetchApi = async (e:any) => {
    e.preventDefault();   
    setLoading(true);      
    const originalUrl = e.target.originalUrl.value;

    if(originalUrl){
          const response = await shortenURL(originalUrl);
    setLoading(false);
    setShortenUrl(response);
    setCopySuccess(false);
    }

  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/api/shorten/${shortUrl}`);
      setCopySuccess(true);
    } catch (err) {
      setCopySuccess(false);
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center bg-gradient-to-r from-[#bdc3c7 ]to-[#2c3e50]">

        <div className="flex justify-center items-center h-[90vh] flex-col  ">
        <div className="p-10 bg-white rounded-lg shadow-2xl max-w-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
            URL SHORTY
          </h1>

          <form method="POST" onSubmit={fetchApi} className="space-y-6">
            <input
              type="text"
              placeholder="Enter URL"
              name="originalUrl"
              className="input input-bordered w-full"
            />

            <button type="submit" className="btn btn-primary w-full">
              Shorten
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <Link href="/urls" >
            <span className="btn btn-secondary w-full">View All Shortened URLs</span>
          </Link>
        </div>

        {shortUrl && (
          <div className="mt-6 p-4 bg-green-500 px-3 overflow-hidden text-white rounded-lg flex items-center justify-between w-full max-w-lg flex-col gap-y-4 md:flex-row">
            <span>{`${process.env.NEXT_PUBLIC_BASE_URL}/api/shorten/${shortUrl}`}</span>
            <button
              onClick={copyToClipboard}
              className="btn btn-sm btn-light ml-4"
            >
              Copy
            </button>
          </div>
        )}

        
   {loading && (
        <span className="loading loading-infinity loading-lg mt-4 text-gray-200"></span>
        )}

        {copySuccess && (
          <div className="mt-2 text-center text-green-700  ">
            Shortened URL copied to clipboard!
          </div>
        )}
        </div>
     
      </div>
   
    </>
  );
}
