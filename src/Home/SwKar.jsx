import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { taom, malumot } from './Apix'
import grup from './images/grup.png'



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function SwKar() {
    
    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={3}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper swe"
            >
                {malumot.map((value) => {
                    return (
                        <SwiperSlide className='sw' key={value.id}>
                            <div className='w-[340px] h-[148px]  ml-[20px] mt-[30px]'>
                                <h1 className='font-["inter"] font-semibold text-[24px] text-[#333333] text-left'>{value.ism}</h1>
                                <p className='w-[340px] h-66px] font-["inter"] font-normal text-[14px] text-[#333333 text-left mt-[10px]'>{value.about}</p>
                                <img src={grup} className='mt-[20px]' alt="" />
                            </div>
                        </SwiperSlide>
                    )
                })}


            </Swiper>
        </>
    );
}
