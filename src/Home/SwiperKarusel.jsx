import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import food from './Api'



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function SwiperKarusel() {
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
        className="mySwiper "
      >
        {
          food.map((value) => {
            return (
              <SwiperSlide key={value.id}>
                <img className='w-[270px] h-[183px] m-auto' src={value.img} alt="" />
                <h2 className='font-["opens"] font-semibold text-[18px] w-[270px] h-[50px] text-center text-[#242424] m-auto mt-[10px]'>{value.title}</h2>
                <div className="rating mt-[20px]">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <h3 className='font-["opens" font-bold text-[24px] text-[#BB2339] ]'>${value.price}</h3>
              </SwiperSlide >
            )
          })
        }


      </Swiper>
    </>
  );
}
