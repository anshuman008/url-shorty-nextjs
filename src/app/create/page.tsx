"use client";
import Link from "next/link";
import shortenURL from "../serverActions/ShortenUrlAction";
import { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/moving-border";

export default function Home() {
  const [shortUrl, setShortenUrl] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchApi = async (e: any) => {
    e.preventDefault();
    const originalUrl = e.target.originalUrl.value;

    if (originalUrl) {
      setLoading(true);

      const response = await shortenURL(originalUrl);
      setLoading(false);
      setShortenUrl(response);
      setCopySuccess(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/shorten/${shortUrl}`
      );
      setCopySuccess(true);
    } catch (err) {
      setCopySuccess(false);
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <div className="h-screen  dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="flex justify-center items-center h-[90vh] flex-col  ">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#18181b] dark:bg-zinc-900">
            <div className="p-10  rounded-lg w-full">
              <h1 className="text-3xl font-bold mb-6 text-center text-gray-200">
                URL SHORTY
              </h1>

              <form method="POST" onSubmit={fetchApi} className="space-y-6">
                <input
                  type="text"
                  placeholder="Enter URL"
                  name="originalUrl"
                  className="input input-bordered w-full"
                />

                {/* <button type="submit" className="btn btn-primary w-full">
              Shorten
            </button> */}
                <div className="  flex justify-center items-center">
                  <button type="submit" className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                      Short it!
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </BackgroundGradient>

          <div className="mt-6 text-center">
            <Link
              href="/urls"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              View All Shortened URLs
            </Link>
          </div>

          {shortUrl && (
            <div className="mt-6 p-4 bg-[#18181b] px-3 overflow-hidden text-white rounded-lg flex items-center justify-between w-full max-w-lg flex-col gap-y-4 md:flex-row">
              <span>{`${process.env.NEXT_PUBLIC_BASE_URL}/api/shorten/${shortUrl}`}</span>

              <button
                onClick={copyToClipboard}
                className="ml-4 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl px-9">
                  Copy
                </span>
              </button>
            </div>
          )}

          {loading && (
            <span className="loading loading-infinity loading-lg mt-4 text-gray-200"></span>
          )}

          {copySuccess && (
            <div className="mt-2 text-center text-green-400 ">
              Shortened URL copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </>
  );
}
