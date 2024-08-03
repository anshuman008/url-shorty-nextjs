import { UrlShortnerService } from "@/services/UrlShortnerService"; 
import { NextResponse } from "next/server";
import { cache } from "react";



export async function POST(req:Request){
    const {originalUrl} = await req.json();

    const shortenService = new UrlShortnerService();
    const shortUrl = await shortenService.shortentUrl(originalUrl);

   return NextResponse.json({msg:shortUrl});
}

// const fetchUrls = cache(async () =>{
//     const shortenerService = new UrlShortnerService();
//     const responce = await shortenerService.getAllUrls();
//     return responce;
// })

const fetchUrls = async () => {
    const shortenerService = new UrlShortnerService();
    const response = await shortenerService.getAllUrls();
    return response;
}

export async function GET() {
    const urls = await fetchUrls();
    const response = NextResponse.json({urls})
    // response.headers.set('Cache-Control', 'public, max-age=60, s-maxage=60, stale-while-revalidate=59');
    return response;
}

