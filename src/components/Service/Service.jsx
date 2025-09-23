import React from 'react'
import Flex from '../Layouts/Flex'
import BackgroundOverlay from '../Layouts/BackgroundOverlay'
import BackgroundImage from '../Layouts/BackgroundImage'

const Service = () => {
  return (
    <>
      <Flex className='flex-row pt-[10px] md:pt-[28px] '>
        <div className='w-auto md:w-[50%] pt-[10px] md:pt-[134px]  font-primary text-black'>
          <Flex className='md:flex-row items-center md:justify-end'>
            <div>
              <h4 className='text-[20px] md:text-[64px] font-bold w-auto md:w-[509px]'>Our Services</h4>
              <p className='font-medium text-[#6C6C6C] text-[14px] md:text-base w-auto md:w-[405px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </Flex>
        </div>
        <div className='w-auto md:w-[50%]'>
          <BackgroundImage className={'bg-[url(./assets/service1.png)]'}>
            <BackgroundOverlay />
            <div className='font-primary text-white md:pl-[50px] '>
              <h1 className='text-[18px] md:text-[36px] font-bold'>Modern natural oil and gas refineries.</h1>
              <button className='py-[5px] px-[50px] text-[14px] mt-[5px] md:text-base md:py-[13px] md:px-[40px] bg-[#F40404] md:mt-[19px]  font-semibold hover:bg-transparent border-2 border-[#F40404] hover:border-white duration-500 ease-in-out'>Learn More</button>
            </div>
          </BackgroundImage>
        </div>
      </Flex>
      <Flex className='flex-row'>
        <div className='w-auto md:w-[50%]'>
          <BackgroundImage className={'bg-[url(./assets/service2.png)]'}>
            <BackgroundOverlay />
            <div className='font-primary text-white md:pl-[50px] '>
              <h1 className='text-[18px] md:text-[36px] font-bold'>Supply of national industries.</h1>
              <button className='py-[5px] px-[50px] text-[14px] mt-[5px] md:text-base md:py-[13px] md:px-[40px] bg-[#F40404] md:mt-[19px]  font-semibold hover:bg-transparent border-2 border-[#F40404] hover:border-white duration-500 ease-in-out'>Learn More</button>
            </div>
          </BackgroundImage>
        </div>
        <div className='w-auto md:w-[50%]'>
          <BackgroundImage className={'bg-[url(./assets/service1.png)]'}>
            <BackgroundOverlay />
            <div className='font-primary text-white md:pl-[50px] '>
              <h1 className='text-[18px] md:text-[36px] font-bold'>National fuel distribution and supply.</h1>
              <button className='py-[5px] px-[50px] text-[14px] mt-[5px] md:text-base md:py-[13px] md:px-[40px] bg-[#F40404] md:mt-[19px]  font-semibold hover:bg-transparent border-2 border-[#F40404] hover:border-white duration-500 ease-in-out'>Learn More</button>
            </div>
          </BackgroundImage>
        </div>
      </Flex>
    </>
  )
}

export default Service