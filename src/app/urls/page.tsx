import Image from "next/image";
import { useState } from "react";
import Navbar from "../comonents/Navbar";
import { url } from "inspector";
import next from "next";
import Link from "next/link";
import { revalidatePath } from "next/cache";




async function fetchUrls() {
  console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/shorten`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/shorten`, {cache:'no-store'}
  );
  if (!response.ok) {
    throw new Error("Failed to fetch urls");
  }
  return response.json();
}

export default async function UrlList() {
  let urls;
  try {
    urls = await fetchUrls();
    console.log(urls);
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
          <h1 className="text-xl font-bold mb-6 text-center text-gray-700">
            Error
          </h1>
          <p className="text-center text-red-500">Filed to load urls</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className=" bg-gray-400 flex flex-col justify-center items-center">
        <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full  my-10 ">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-700 ">
            All Short Urls
          </h1>
          <Link href="/" className="text-gray-800 ">
            {" "}
            Go To Home
          </Link>
          <div className="overflow-x-auto">
            <table className="table table-zebra-zebra w-full">
              <thead>
                <tr>
                  <th className="text-black text-lg">Original Url</th>
                  <th className="text-black text-lg">Shorten Url</th>
                  <th className="text-black text-lg">Clicks</th>
                </tr>
              </thead>

              {urls.urls.map((url:any, index: number) => (
                <tbody key={index}>
                  <tr>
                    <td>{url.originalUrl}</td>
                    <td>
                      <a 
                      href={`/api/shorten/${url.shortUrl}`}
                      target="_blank"
                      className="link link-primary">
                        {process.env.NEXT_PUBLIC_BASE_URL}/api/shorten/
                        {url.shortUrl}
                      </a>
                    </td>
                    <td className="text-black text-xl">{url.clicks}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>

      {/* <HeroComp /> */}
    </div>
  );
}
