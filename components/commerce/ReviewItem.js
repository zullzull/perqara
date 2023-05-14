import Image from "next/image"
import Rating from "../Rating"
export default function ReviewItem() {
   return (
      <div className="bg-[#f9f9f9] rounded-[14px] shadow-md p-6">
         <div className="flex flex-col">
            <div className="ReviewHeader flex justify-between items-center">
               <div className="ReviewAccount flex items-center space-x-4">
                  <div className="block overflow-hidden w-12 h-12 relative group">
                     <Image
                        src="/images/wonderwomen.jpg"
                        className="h-full w-full object-cover rounded-full absolute inset-0"
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
                  <div className="flex flex-col space-y-1">
                     <div className="text-sm font-bold text-[#1E232A] leading-4">SWITCh</div>
                     <div className="text-xs text-[#666666] leading-4">December 18, 2020</div>
                  </div>
               </div>
               <div className="ReviewRating bg-[#C4C4C4]/[0.28] pl-1 py-1 pr-4 rounded-[7px]">
                  <Rating size={17} score="7.0" bigg up mode="light" />
               </div>
            </div>
            <div className="ReviewContent content-builder pt-7">
               <p>It isn&sbquo;t as easy as saying &sbquo;Wonder Woman 1984&sbquo; is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you&sbquo;re a fan of the original film, you&sbquo;ll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer&sbquo;s jaw-dropping score like on the big screen. - Chris dos Santos...<a href="#">read the rest.</a></p>
            </div>
         </div>
      </div>
   )
}