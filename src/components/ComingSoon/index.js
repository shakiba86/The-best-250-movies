import React, { useState, useEffect } from 'react';
import './style.css';
import API from '../../helpers/api';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import ComingCard from '../ComingCard';
import  getApiKey  from "../../helpers/getKey.js";

export default function ComingSoon() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
 

useEffect(() => {
    setLoading(true);
    API.get(`movie/upcoming`, { params: { api_key: getApiKey() } })
        .then(response => {
            setSlides(response.data.results);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error.message);
        });
}, []);

 
  return (
    <section  className="coming-soon">
      <div className="container-full">
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <h4 className="section-title">Coming Soon</h4>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="coming-Swiper"
          >
            {slides &&
              slides.length > 0 &&
              slides.map(slide => (
                <SwiperSlide key={slide._id}>
                  <ComingCard slide={slide} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}


