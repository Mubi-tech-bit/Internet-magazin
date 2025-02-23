import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import rasm1 from './images/1.png'
import rasm2 from './images/2.png'
import rasm3 from './images/3.png'
import rasm4 from './images/4.jpg'




// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Swk() {

    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper swip"
            >
                <SwiperSlide className='swk'><img className='h-[100%] w-[100%]' src={rasm1} alt="" /></SwiperSlide>
                <SwiperSlide className='swk'><img className='h-[100%] w-[100%]' src={rasm2} alt="" /></SwiperSlide>
                <SwiperSlide className='swk'><img className='h-[100%] w-[100%]' src={rasm3} alt="" /></SwiperSlide>
                <SwiperSlide className='swk'><img className='rounded-[15px] h-[100%] w-[100%]' src={rasm4} alt="" /></SwiperSlide>
                <SwiperSlide className='swk'><img className='h-[100%] w-[100%]' src={rasm1} alt="" /></SwiperSlide>
                <SwiperSlide className='swk'><img className='h-[100%] w-[100%]' src={rasm2} alt="" /></SwiperSlide>
                <SwiperSlide className='swk'><img className='h-[100%] w-[100%]' src={rasm3} alt="" /></SwiperSlide>
                <SwiperSlide className='swk'><img className='rounded-[15px] h-[100%] w-[100%]' src={rasm4} alt="" /></SwiperSlide>


            </Swiper>
        </>
    );
}
