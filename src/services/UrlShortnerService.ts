import UrlRepository from "@/repositories/UrlRepository";
import shortId from 'shortid';



export class UrlShortnerService{
    private urlRepository;
    constructor(){
        this.urlRepository = new UrlRepository();
    }
    async shortentUrl(originalUrl: string) : Promise<string> {
        let url = await this.urlRepository.getUrlByOriginalUrl(originalUrl);

        if(url){
            return url.shortUrl;
        }

        let shortUrl = shortId()
         
        url = await this.urlRepository.getUrlByShortUrl(shortUrl);

        while(url){
            shortUrl = shortId();
            url = await this.urlRepository.getUrlByShortUrl(shortUrl);
        }


        await this.urlRepository.createUrl(originalUrl,shortUrl);

        return shortUrl;
    }

    async getAllUrls() {
        return await this.urlRepository.getAllUrls();
    }

    async getUrlByShortUrl(shortUrl:string){
        return await this.urlRepository.getUrlByShortUrl(shortUrl);
    }

    async clickIncreament(shortUrl:string){
        return await this.urlRepository.updateClick(shortUrl);
    }
}