import Link from "next/link"
import Image from "next/image"
import Rating from "../Rating"

export default function ProductItem({params}) {
   return (
      <Link href="#" className="grid relative">
         <div className="absolute right-0 top-0 px-[10px] py-[5px] font-bold h5 bg-pq-footer/80 text-pq-gray flex justify-center items-center z-20">
            7.0
         </div>
         <div className="block overflow-hidden pb-80 relative group">
            <Image
               src="/images/image-12.jpg"
               className="h-full w-full object-fill absolute inset-0 rounded-sm"
               priority
               width="0"
               height="0"
               sizes="320 640 750"
               quality={80}
               alt="MovieTime Product"
               blur={20}
               blurDataURL="/images/image-12.jpg"
            />
            <div className="opacity-0 h-0 z-30 flex flex-col space-y-11 justify-center items-center text-pq-gray bg-pq-primary/80 invisible group-hover:absolute group-hover:inset-0 group-hover:transition group-hover:opacity-100 group-hover:visible group-hover:duration-200 group-hover:ease-in-out group-hover:h-80">
               <Rating score={7.3} size={32} big={true} />
               <div className="text-lg font-semibold leading-5">Action</div>
               <button className="capitalize px-8 py-2 rounded-[32px] text-sm leading-4 font-bold bg-pq-red">View</button>
            </div>
         </div>
         <div className="py-3 text-pq-gray">
            <h6 className="font-semibold leading-5">Wonder Woman 1984</h6>
            <div className="text-sm">2020</div>
         </div>
      </Link>
   )
}