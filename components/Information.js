import Image from "next/image"
import Rating from "./Rating"

export default function Information({informations}) {
   return (
      <div className="w-full">
         <div className="wrapper-fluid grid grid-cols-12">
            <div className="relative col-span-2">
               <div className="absolute w-full">
                  <div className="block overflow-hidden pb-80 relative">
                     <Image
                        src="/images/wonderwomen.jpg"
                        className="h-full w-full object-fill absolute inset-0 rounded-sm"
                        priority
                        width="0"
                        height="0"
                        sizes="320 640 750"
                        quality={80}
                        alt="MovieTime Product"
                        blur={20}
                        blurDataURL="/images/wonderwomen.jpg"
                     />
                  </div>
               </div>
            </div>
            <div className="col-span-10 pl-8 flex flex-col space-y-1 pt-4 pb-8">
               <div className="text-lg dark:text-white uppercase">2020</div>
               <h1 className="font-semibold leading-10 dark:text-pq-gray capitalize">Wonder Women</h1>
               <div className="text-sm dark:text-white capitalize">Fantasy, Action, Adventure</div>
            </div>
         </div>
         <div className="bg-black/50">
            <div className="wrapper-fluid grid grid-cols-12">
               <div className="col-start-3 col-span-10 pl-8 flex items-center py-4 space-x-2">
                  <div className="flex-none">
                     <Rating score="7.0" size={32} bigg={true} mode="dark" />
                  </div>
                  <div className="flex-auto flex">
                     {
                        informations.length > 0 && informations.map((item, i)=>(
                           <div key={i} className="flex flex-col space-y-1 border-r border-pq-gray last:border-none first:pl-0 px-8">
                              <div className="text-sm leading-4 font-medium uppercase text-pq-gray">{item.name}</div>
                              <div className="text-sm leading-4 font-medium uppercase text-white">{item.value}</div>
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-white">
            <div className="wrapper-fluid grid grid-cols-12">
               <div className="col-start-3 col-span-10 pl-8">
                  <div className="pt-8 flex flex-col space-y-1">
                     <div className="text-sm text-pq-red">Overview</div>
                     <div className="text-sm leading-7 max-w-2xl">
                        Wonder Woman comes into conflict with the Soviet Union during the Cold.
                        War in the 1980s and finds a formidable foe by the name of the Cheetah.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}