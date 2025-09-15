import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderOne from "../../assets/sliderOne.png"
import sliderTwo from "../../assets/sliderTwo.png"
import sliderThree from "../../assets/sliderThree.png"
import sliderFour from "../../assets/sliderFour.png"


const ImageSlider = () => {
 var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  
  return (
    <>
   <div className='w-full'>
<Slider {...settings}>
     
   <div className="px-2">
          <img className="w-full" src={sliderOne} alt="" />
        </div>
        <div className="px-2">
          <img className="w-full" src={sliderTwo} alt="" />
        </div>
        <div className="px-2">
          <img className="w-full" src={sliderThree} alt="" />
        </div>
        <div className="px-2">
          <img className="w-full" src={sliderFour} alt="" />
        </div>
        <div className="px-2">
          <img className="w-full" src={sliderTwo} alt="" />
        </div>

      
    </Slider>
   </div>

     </>
  )
}

export default ImageSlider