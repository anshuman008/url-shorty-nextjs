
import { currentUser } from "@clerk/nextjs/server"
export default async function Home() {


  const user = await currentUser();
  
  const username = user?.emailAddresses;
 
  console.log(username[0].emailAddress)
  return (
    <div className="min-h-screen flex justify-start items-center bg-black flex-col pt-40">
       <div className="flex flex-col gap-y-2">
         <span className="text-7xl font-bold text-white">hii!!{username[0].emailAddress} </span>
         <span className="text-7xl font-bold text-orange-400">Superpowers</span>
       </div>

       <span className="text-white my-6 text-2xl">Dub.co is the open-source link management infrastructure for modern marketing teams.</span>   
 </div>
)
}
