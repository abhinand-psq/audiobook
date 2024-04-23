import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Roundslider.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Roundslider() {
  return (
    <div className='round'>
      <Swiper className='mainone'
        slidesPerView={10}
        spaceBetween={1}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        // className="mySwiper"
      >
       
        <SwiperSlide ><img src='/FxMhbISaQAAIf7w.jpg'  ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
        <SwiperSlide><img src='/FxMhbISaQAAIf7w.jpg' ></img><p className='imagetext'>sample</p></SwiperSlide>
      </Swiper>
    </div>
  );
}
