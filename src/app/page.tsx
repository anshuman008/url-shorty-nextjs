import Link from "next/link"

const HeroComp = () => {
  return (
         <div className=" flex justify-center lg:justify-start items-center flex-col pt-56 lg:pt-40">
            <div className="flex flex-col gap-y-2">
              <span className="text-4xl md:text-7xl font-bold text-white">Short Links With</span>
              <span className="text-4xl md:text-7xl font-bold text-orange-400">Superpowers</span>
            </div>

            <span className="text-white my-6 text-lg lg:text-2xl text-center">Shotii is the open-source link management infrastructure for modern marketing teams.</span>

                <Link href={'/create'} className="btn btn-primary text-white">
                  Get Started
                  </Link>
          
      </div>
  )
}

export default HeroComp