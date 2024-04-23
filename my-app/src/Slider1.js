import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider1.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider1({alldata}) {

  const navigate = useNavigate();

  return (
    <div className='one'>
      <Swiper
        slidesPerView={7}
        spaceBetween={13}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        // className="mySwiper"
      >
         {
        alldata.map((res)=>{
          return(
       <SwiperSlide><img alt='loading' onClick={()=>{navigate('/player/'+res.name,{ state: { data: res } })}}  src={'http://localhost:4000/'+res.imagefilepath } ></img></SwiperSlide>
          )
        })
       }
      </Swiper>
    </div>
  );
}
