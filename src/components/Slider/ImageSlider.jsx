import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import sliderOne from "../../assets/sliderOne.png"
import sliderTwo from "../../assets/sliderTwo.png"
import sliderThree from "../../assets/sliderThree.png"
import sliderFour from "../../assets/sliderFour.png"


const ImageSlider = () => {

  return (
    <>
      <div className='w-full'>
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className='pl-1'>
              <img className="w-full" src={sliderOne} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='px-1'>
              <img className="w-full" src={sliderTwo} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='px-1'>
              <img className="w-full" src={sliderThree} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='px-1'>
              <img className="w-full" src={sliderFour} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='pl-1'>
              <img className="w-full" src={sliderTwo} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='pl-1'>
              <img className="w-full" src={sliderOne} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='px-1'>
              <img className="w-full" src={sliderTwo} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='px-1'>
              <img className="w-full" src={sliderThree} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='px-1'>
              <img className="w-full" src={sliderFour} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='pl-1'>
              <img className="w-full" src={sliderTwo} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default ImageSlider