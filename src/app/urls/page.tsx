"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UrlList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  async function fetchUrls() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/shorten`,
        { cache: "no-store" }
      );
      const finalData = await response.json();
      setData(finalData.urls);

      if (!response.ok) {
        throw new Error("Failed to fetch urls");
      }
    } catch (err) {
      console.log("error", err);
      setError(true);
    }
  }

  useEffect(() => {
    fetchUrls();
  }, []);

  const handleUrlClick = async (url: any) => {
    window.open(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/shorten/${url.shortUrl}`,
      "_blank"
    );
    setTimeout(() => {
      fetchUrls();
    }, 500);
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="p-10 bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Error</h1>
          <p className="text-center text-red-500">Failed to load URLs</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <div className="p-8 bg-gray-800 rounded-lg shadow-2xl w-full max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">All Short URLs</h1>
          <div className="mb-4 text-center">
            <Link href="/" className="text-blue-400 hover:underline">
              Go To Home
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-sm font-medium text-gray-400">Original URL</th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-400">Shortened URL</th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-400">Clicks</th>
                </tr>
              </thead>
              <tbody>
                {data.map((url: any, index: number) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-gray-700 transition-all">
                    <td className="px-4 py-2 text-white break-words">{url.originalUrl}</td>
                    <td className="px-4 py-2">
                      <a
                        href="#"
                        onClick={() => handleUrlClick(url)}
                        className="text-blue-400 hover:underline break-words"
                      >
                        {process.env.NEXT_PUBLIC_BASE_URL}/api/shorten/{url.shortUrl}
                      </a>
                    </td>
                    <td className="px-4 py-2 text-white text-center">{url.clicks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!data.length && (
            <div className="flex flex-col justify-center items-center mt-10">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="skeleton w-full h-12 bg-gray-700 animate-pulse rounded-md my-2"
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
