import React from 'react'
import sliderOne from "../../assets/sliderOne.png"
import sliderTwo from "../../assets/sliderTwo.png"
import sliderThree from "../../assets/sliderThree.png"
import sliderFour from "../../assets/sliderFour.png"
import Flex from '../Layouts/Flex'

const Slider = () => {
  return (
    <Flex className='justify between gap-x-[4px] '>
        <img className='w-[24.8%]' src={sliderOne} alt="" />
        <img className='w-[24.8%]'src={sliderTwo} alt="" />
        <img className='w-[24.8%]' src={sliderThree} alt="" />
        <img className='w-[24.8%]' src={sliderFour} alt="" />
    </Flex>
  )
}

export default Slider