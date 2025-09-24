import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import sliderOne from "../../assets/sliderOne.png"
import sliderTwo from "../../assets/sliderTwo.png"
import sliderThree from "../../assets/sliderThree.png"
import sliderFour from "../../assets/sliderFour.png"
import { Autoplay } from 'swiper/modules';

export default function ImageSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}

      >
        <SwiperSlide><img className="w-full" src={sliderOne} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={sliderTwo} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={sliderThree} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={sliderFour} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={sliderTwo} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={sliderFour} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={sliderThree} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={sliderOne} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={sliderFour} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
