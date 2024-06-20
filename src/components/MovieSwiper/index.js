
import { Swiper, SwiperSlide } from 'swiper/react';
import getImage from '../../helpers/getImage';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

export default function MovieSwiper({ slides, slideChange }) {
  const renderSlides = () => {
    return slides.map((slide, id) => {
      return (
        <SwiperSlide key={id}>
          <img src={getImage(slide.backdrop_path)} alt={`Slide ${id}`} onClick={() => slideChange(slide.id)} />
        </SwiperSlide>
      );
    });
  };

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
    >
      {renderSlides()}
    </Swiper>
  );
}

