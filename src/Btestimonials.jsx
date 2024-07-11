import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import { btestimonialsinfo } from './data';

export default function Btestimonials() {
  return (
    <>
    <div className="container py-4">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop = {true}
        breakpoints={
          {
           320:{
             slidesPerView:2,
             spaceBetween:10
           },
           640:{
             slidesPerView:3,
             spaceBetween:20,
           },
           1020:{
             slidesPerView:5,
             spaceBetween:30,
           }
          }
         }
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        
        {btestimonialsinfo.map((item)=>(
            <SwiperSlide key={item.id}><img src={item.img} alt="image" /></SwiperSlide>
        ))}
       
        
        
        
        
      </Swiper>
      </div>
    </>
  );
}
