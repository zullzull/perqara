import ReviewItem from "@/components/commerce/ReviewItem";
import Information from "@/components/Information";
import RecommendedMovies from "@/components/RecommendedMovie";
import HeadSEO from "@/components/system/head";
import LayoutDefaults from "@/layouts/default"
import Image from "next/image";

export default function Movie({}) {

   const informations = [
      {
         name: 'User Score',
         value: '3621 Votes'
      },
      {
         name: 'Status',
         value: 'Released'
      },
      {
         name: 'Language',
         value: 'English'
      },
      {
         name: 'Budget',
         value: '$200,000,000.00'
      },
   ]

   return (
      <>
         <HeadSEO title="Wonder Women | Moovie Time" />
         <section className="MoviePage flex flex-col">
            <div className="block h-40 md:h-80 overflow-hidden">
               <Image
                  src="/images/banner.png"
                  className="h-full w-full object-cover object-top  absolute inset-0 rounded-sm"
                  priority
                  width="0"
                  height="0"
                  sizes="320 640 750"
                  quality={80}
                  alt="MovieTime Product"
                  blur={20}
                  blurDataURL="/images/banner.png"
               />
            </div>
            <div className="Information flex-grow relative z-40">
               <Information informations={informations} />
               <div className="Reviews bg-white">
                  <div className="wrapper-fluid pt-8">
                     <div className="font-sm leading-4 text-pq-red uppercase font-semibold">Reviews</div>
                     <div className="grid grid-cols-2 gap-8 pt-6 pb-14">
                        {
                           Array(2).fill('review').map((item, i) => (
                              <ReviewItem key={i} />
                           ))
                        }
                     </div>
                  </div>
               </div>
               <div className="RecommendedMovies bg-pq-primary">
                  <div className="wrapper-fluid">
                     <div className="font-sm uppercase leading-4 text-white font-semibold pt-12 pb-9">RECOMMENDATION MOVIES</div>
                     <RecommendedMovies />
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

Movie.getLayout = function getLayout(page) {
   return (
     <LayoutDefaults transparant={true}>
       {page}
     </LayoutDefaults>
   );
};