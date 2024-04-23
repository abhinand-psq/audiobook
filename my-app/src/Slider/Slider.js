import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slide.style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Slider({alldata}) {

  const navigate = useNavigate();

useEffect(()=>{
  console.log(alldata);
})

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={13}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {
        alldata.map((res)=>{
         if(res.adminapproved === true){
          return(
            <SwiperSlide><img alt='loading' onClick={()=>{navigate('/player/'+res.name,{ state: { data: res } })}}  src={'http://localhost:4000/'+res.imagefilepath } ></img></SwiperSlide>
               )
         }
        })
       }
      </Swiper>
    </>
  );
}
