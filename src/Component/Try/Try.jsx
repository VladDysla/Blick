import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './try.css'

// Import Swiper styles
import 'swiper/css';
export default function Try() {
   return (
      <div className="cont">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        loop={true} // Добавлено свойство loop для бесконечного цикла
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><div className="red li"></div></SwiperSlide>
        <SwiperSlide><div className="green li"></div></SwiperSlide>
        <SwiperSlide><div className="blue li"></div></SwiperSlide>
        <SwiperSlide><div className="grey li"></div></SwiperSlide>
        ...
      </Swiper>
      </div>

    );
}
