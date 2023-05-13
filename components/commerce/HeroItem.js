import Link from "next/link"
import Image from "next/image"
import Rating from "../Rating"

export default function HeroItem({isActive}) {
   return (
      <div className={`flex relative ${isActive ? 'opacity-100' : 'opacity-50'}`}>
         <Link href="#" className="block flex-none w-5/12 overflow-hidden pb-80">
            <Image
               src="/images/image-12.jpg"
               className="h-full w-[inherit] object-fill absolute inset-0 rounded-sm"
               priority
               width="0"
               height="0"
               sizes="320 640 750"
               quality={80}
               alt="Hero-1"
               blur={20}
               blurDataURL="/images/image-12.jpg"
            />
         </Link>
         <div className="my-5 flex-auto w-6/12 bg-black flex flex-col text-white">
            <div className="grid pr-5 py-6 pl-4 gap-y-3">
               <Rating score={7.3} size={16.2} big={false} />
               <h2 className="h2">Space Sweepers</h2>
               <div className="flex space-x-2 items-center">
                  <p className="h5">2021</p>
                  <span className="bg-pq-gray w-1.5 h-1.5 rounded-full"></span>
                  <p className="h5">Sci-fi</p>
               </div>
               <div className="leading-[18px] text-xs">
                  When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.
               </div>
            </div>
         </div>
      </div>
   )
}