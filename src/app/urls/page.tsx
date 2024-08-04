
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";




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
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
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
      
      <div className=" bg-[#0f172a] flex flex-col justify-center items-center">
        <div className="p-10 bg-[#0f172a] rounded-lg shadow-2xl shadow-slate-400 max-w-4xl w-full  my-10 ">
          <h1 className="text-3xl font-bold mb-6 text-center text-white ">
            All Short Urls
          </h1>
          <Link href="/" className="text-white ">
            {" "}
            Go To Home
          </Link>
          <div className="overflow-x-auto">
            <table className="table table-zebra-zebra w-full">
              <thead>
                <tr>
                  <th className="text-white text-lg">Original Url</th>
                  <th className="text-white text-lg">Shorten Url</th>
                  <th className="text-white text-lg">Clicks</th>
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
                    <td className="text-white text-xl">{url.clicks}</td>
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
