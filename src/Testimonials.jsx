import React from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles

// Import required modules
import {  Pagination } from 'swiper/modules';
import {  Navigation ,Autoplay} from 'swiper/modules';
import { testimonialsinfo } from './data';

export default function Testimonials() {
   
  return (
    <>
    <div className="container py-5">
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        loop = {true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={
           {
            320:{
              slidesPerView:1,
              spaceBetween:10
            },
            640:{
              slidesPerView:2,
              spaceBetween:20,
            },
            1020:{
              slidesPerView:3,
              spaceBetween:30,
            }
           }
          }
        
        modules={[Pagination,Navigation,Autoplay]}
       
        className="mySwiper"
      >

        {testimonialsinfo.map((item)=>(
            <SwiperSlide key={item.id} className='john'>
                <img src={item.img} alt="image" />
                <h5>{item.heading}</h5>
                <p>{item.info}</p>
                <div className="bottom">
                    <div className="d-flex justify-content-between px-3">
                    <div>
                        <h5>{item.name}</h5>
                        <h6>{item.city}</h6>
                    </div>
                    <div className='group'>
                     <i className={item.icon1}></i> 
                     <i className={item.icon1}></i> 
                     <i className={item.icon1}></i> 
                     <i className={item.icon1}></i> 
                     <i className={item.icon1}></i>   
                    </div>
                    </div>
                    
                </div>
            </SwiperSlide>
        ))}
        
        
       
      </Swiper>
      </div>
    </>
  );
}
