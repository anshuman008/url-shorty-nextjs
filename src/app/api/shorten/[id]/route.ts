import { UrlShortnerService } from "@/services/UrlShortnerService"; 
import { error } from "console";
import { NextResponse } from "next/server";




export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    console.log(id);

    const urlShortner = new UrlShortnerService();
    const urlInfo = await urlShortner.getUrlByShortUrl(id);

    if (urlInfo?.originalUrl) {
        // Redirect to the original URL
        const updateClick = await urlShortner.clickIncreament(id);
        return NextResponse.redirect(urlInfo.originalUrl);
    }

    // Return a 404 response if the original URL is not found
    return NextResponse.json({ error: 'URL not found' }, { status: 404 });
}

// export async function POST(req:Request,{params}:{params:{id:string}}){
//     const { id } = params;

//     console.log(id);

//     const urlShortnerService = new UrlShortnerService();
//     const updateClick = await urlShortnerService.clickIncreament(id);

//      if(updateClick){
//             return NextResponse.json({msg: 'Updated succesfully'}, {status:201});
//      }

//      return NextResponse.json({ error: 'URL not found' }, { status: 404 });

// }
