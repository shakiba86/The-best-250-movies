import React, { useState, useEffect } from 'react';
import './style.css';
import API from '../../helpers/api';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import ComingCard from '../ComingCard';

export default function ComingSoon() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const api_key = "0c0b05bee8c0e7162a4585261749958a";

useEffect(() => {
    setLoading(true);
    API.get(`movie/upcoming`, { params: { api_key } })
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
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


