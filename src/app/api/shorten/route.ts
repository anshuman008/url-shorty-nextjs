import { UrlShortnerService } from "@/services/UrlShortnerService"; 
import { NextResponse } from "next/server";



export async function POST(req:Request){
    const {originalUrl} = await req.json();

    const shortenService = new UrlShortnerService();
    const shortUrl = await shortenService.shortentUrl(originalUrl);

   return NextResponse.json({msg:shortUrl});
}

export async function GET(req:Request){
    const shortenService = new UrlShortnerService();
    const allUrls = await shortenService.getAllUrls();

    return NextResponse.json({msg:"Successfullyy",data:allUrls});
}

