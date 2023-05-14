import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';

import ProductItem from './commerce/ProductItem';

export default function RecommendedMovies() {
   const swiperRef = useRef();
   return (
      <div>
         <Swiper
            slidesPerView={1.2}
            breakpoints={{
               320: {
                  slidesPerView: 1.2,
                  spaceBetween: 21
               },
               768: {
                  slidesPerView: 2.2,
                  spaceBetween: 21
               },
               1024: {
                  slidesPerView: 5,
                  spaceBetween: 21
               },
            }}
            watchSlidesProgress
            className="w-full h-auto m-auto !pb-12"
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
         >
            {
               Array(8).fill('zull').map((item,i)=>(
                  <SwiperSlide key={i} className="scale-100">
                     {
                        ({isActive}) => (
                           <ProductItem  />
                        )
                     }
                  </SwiperSlide>
               ))
            }
         </Swiper>
      </div>
   )
}