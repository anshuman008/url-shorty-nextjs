'use server'

import { UrlShortnerService } from "@/services/UrlShortnerService";
import { revalidatePath } from "next/cache";

const shortenURL = async (originalUrl: string) => {
    // const originalUrl : string = formData.get('originalUrl') as string;

    if(originalUrl){
    console.log("Oriignal URL Passed is ", originalUrl);
    const shortenerService = new UrlShortnerService();
    const shortUrl = await shortenerService.shortentUrl(originalUrl);
    revalidatePath('/urls');

    return shortUrl;
    }

     return('error')
}
export default shortenURL