import React from 'react'
import sliderOne from "../../assets/sliderOne.png"
import sliderTwo from "../../assets/sliderTwo.png"
import sliderThree from "../../assets/sliderThree.png"
import sliderFour from "../../assets/sliderFour.png"
import Flex from '../Layouts/Flex'

const Slider = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
   
    // <Flex className='justify-between'>
    //     <img className='w-[24%] gap-x-[15px]' src={sliderOne} alt="" />
    //     <img className='w-[24%] gap-x-[15px]'src={sliderTwo} alt="" />
    //     <img className='w-[24%] gap-x-[15px]' src={sliderThree} alt="" />
    //     <img className='w-[24%]' src={sliderFour} alt="" />
    // </Flex>
      <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
     </>
  )
}

export default Slider