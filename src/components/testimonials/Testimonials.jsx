import React from 'react'
import "./Testimonials.css"
import { userData } from "./data"
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>  
      <h2>Testimonials</h2>
      <Swiper   spaceBetween={40} slidesPerView={1} modules={[Pagination]} 
      pagination={{ clickable: true }} className="container testimonials__container">
         {
          userData.map((val, ind) =>{
            return(
              <SwiperSlide key={ind} className="testimonial">
                <div className="client__avatar">
                  <img src={val.images} alt="Client One" />
                </div>
                <h5 className='client__name'>{val.names}</h5>
                <small className='client__review'>
                  {val.reviews}
                </small>
              </SwiperSlide>
            )
          })
         }
      </Swiper>
    </section>
  )
}

export default Testimonials