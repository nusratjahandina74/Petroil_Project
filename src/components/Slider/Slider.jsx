import React from 'react'
import sliderOne from "../../assets/sliderOne.png"
import sliderTwo from "../../assets/sliderTwo.png"
import sliderThree from "../../assets/sliderThree.png"
import sliderFour from "../../assets/sliderFour.png"
import Flex from '../Layouts/Flex'

const Slider = () => {
  return (
    <Flex className='justify-between'>
        <img className='w-[24%] gap-x-[15px]' src={sliderOne} alt="" />
        <img className='w-[24%] gap-x-[15px]'src={sliderTwo} alt="" />
        <img className='w-[24%] gap-x-[15px]' src={sliderThree} alt="" />
        <img className='w-[24%]' src={sliderFour} alt="" />
    </Flex>
  )
}

export default Slider