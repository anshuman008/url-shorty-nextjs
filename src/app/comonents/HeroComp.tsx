import { SignInButton } from "@clerk/nextjs"

const HeroComp = () => {
  return (
         <div className="min-h-screen flex justify-start items-center bg-black flex-col pt-40">
            <div className="flex flex-col gap-y-2">
              <span className="text-7xl font-bold text-white">Short Links With</span>
              <span className="text-7xl font-bold text-orange-400">Superpowers</span>
            </div>

            <span className="text-white my-6 text-2xl">Dub.co is the open-source link management infrastructure for modern marketing teams.</span>

            <SignInButton  mode="modal">
                <button className="btn btn-primary text-white">
                  Get Started
                  </button>
              </SignInButton>
          
      </div>
  )
}

export default HeroComp