// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeroItem from './commerce/HeroItem';
import { useRef } from 'react';

export default function Hero() {
   const swiperRef = useRef();

   return (
      <section className="Hero bg-pq-primary">
         <Swiper
            modules={[Pagination]}
            slidesPerView={3.2}
            breakpoints={{
               320: {
                  slidesPerView: 1,
                  spaceBetween: 33
               },
               768: {
                  slidesPerView: 1.2,
                  spaceBetween: 33
               },
               1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 33
               },
            }}
            initialSlide={3}
            centeredSlides={true}
            watchSlidesProgress
            pagination={{
               el: '.pagination-wraper-perqara',
               type: 'bullets',
               dynamicBullets: true,
               dynamicMainBullets: 3,
               hiddenClass: 'hidden',
               bulletActiveClass: 'pagination-active-perqara',
               bulletClass: 'w-3 h-3 inline-block bg-pq-gray rounded-full opacity-100 transition duration-200 !scale-100',
               clickable: true,
            }}
            className="w-full h-auto m-auto !pt-16 !pb-28"
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
         >
            {
               Array(8).fill('zull').map((item,i)=>(
                  <SwiperSlide key={i} className="scale-100">
                     {
                        ({isActive}) => (
                           <HeroItem isActive={isActive} />
                        )
                     }
                  </SwiperSlide>
               ))
            }
            <div className='pagination-wraper-perqara'></div>
         </Swiper>
      </section>
   )
}