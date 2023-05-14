import Title from "@/components/Title";
import LayoutDefaults from "@/layouts/default";
import { useEffect, useState } from "react";
import ProductItem from "@/components/commerce/ProductItem";
import Select from "@/components/Select";
import HeadSEO from "@/components/system/head";


export default function Movies() {
   const [loading, setLoading ] = useState(true)
   const [count, setCount ] = useState(12)
   const defaultSortOptions = [
      {
         value: 'popularity_asc',
         name: 'Popularity Ascending',
      },
      {
         value: 'product_price_asc',
         name: 'Popularity Descending',
      },
      {
         value: 'realese_date_asc',
         name: 'Realese Date Ascending',
      },
      {
         value: 'realese_date_dsc',
         name: 'Realese Date Descending',
      },
      {
         value: 'rating_asc',
         name: 'Rating Ascending',
      },
      {
         value: 'rating_dsc',
         name: 'Rating Descending',
      },
   ]

   const genres = [
      {
         name: 'Action',
         slug: 'action'
      },
      {
         name: 'Adventure',
         slug: 'adventure'
      },
      {
         name: 'Animation',
         slug: 'animation'
      },
      {
         name: 'Comedy',
         slug: 'comedy'
      },
      {
         name: 'Crime',
         slug: 'crime'
      },
      {
         name: 'Documentary',
         slug: 'documentary'
      },
      {
         name: 'Drama',
         slug: 'drama'
      },
      {
         name: 'Family',
         slug: 'family'
      },
      {
         name: 'Fantasy',
         slug: 'fantasy'
      },
      {
         name: 'History',
         slug: 'history'
      },
      {
         name: 'Horror',
         slug: 'horror'
      }
   ]

   useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      }, 3000)
   },[])

   return (
      <>
         <HeadSEO title="MoovieTime" />
         <section className='MoviesPage bg-primary-gradient'>
            <div className="wrapper-fluid">
               <div className="MoviesTitle py-[59px] w-2/12">
                  <Title name="Movies" big={true} />
               </div>
               <div className="MoviesMain grid grid-cols-12 gap-x-7">
                  <aside className="col-span-3 text-pq-gray">
                     <div className="rounded-lg bg-gradient-to-tl from-[#1E232A] to-[#0E1723] pt-[2px] pb-5">
                        <h6 className="p-[18px] border-b border-white/70">
                           Sort Result By
                        </h6>
                        <div className="pt-[18px] pb-8 px-[18px] border-b border-white/70">
                           <Select options={defaultSortOptions}/>
                        </div>
                        <div className="px-[18px] py-3 border-b border-white/70 h6 font-semibold">
                           Genre
                        </div>
                        <div className="grid px-[18px] py-3">
                           {
                              genres.map((item, i)=>(
                                 <label key={i} className="flex justify-between py-2 first:pt-2 last:pb-2">
                                    <span className="text-sm">{item.name}</span>
                                    <div className="relative flex items-center justify-center">
                                       <input type="checkbox" className="appearance-none inline-block relative w-3.5 h-3.5 border rounded bg-pq-secondary transition-all duration-200 peer checked:bg-pq-orange" value={item.value} />
                                       <svg className="opacity-0 invisible absolute transition duration-200 ease-in-out peer-checked:opacity-100 peer-checked:visible" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 3L5 7L11 1" stroke="white" strokeWidth={2}/>
                                       </svg>
                                    </div>
                                 </label>
                              ))
                           }
                        </div>
                     </div>
                  </aside>
                  <div className="col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-7">
                     {
                        loading ? 
                        Array(5).fill('zull').map((item, i)=>(
                           <div key={i} className='flex flex-col space-y-2 animate-pulse'>
                           <div className='w-full h-64 rounded-sm bg-pq-footer'></div>
                           <div className='w-1/2 h-8 rounded-sm bg-pq-footer'></div>
                           <div className='w-1/4 h-4 rounded-sm bg-pq-footer'></div>
                           </div>
                        )) :
                        Array(count).fill('zull').map((item, i)=>(
                           <ProductItem key={i} />
                        ))
                     }
                     <div className="flex justify-center items-center col-span-full pb-24 pt-6">
                        <button onClick={()=> setCount(count+12)} className="bg-pq-red rounded-[32px] py-2 px-9 text-pq-gray text-sm">Load More</button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

Movies.getLayout = function getLayout(page) {
   return (
     <LayoutDefaults>
       {page}
     </LayoutDefaults>
   );
};