import React from 'react'
import Flex from '../Layouts/Flex'

const Service = () => {
  return (
    <>
    <Flex className='pt-[28px] '>
      <div className='w-[50%] pl-[290px] pt-[134px] font-primary text-black'>
        <h4 className='text-[64px] font-bold w-[509px]'>Our Services</h4>
        <p className='font-medium text-[#6C6C6C] w-[405px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
      <div className='w-[50%]'>
           <div className='z-[1] relative bg-[url(./assets/service1.png)] pt-[147px] pb-[139px] bg-no-repeat bg-cover bg-center'>
      <div className='z-[-1] absolute w-full h-full bg-black/60 top-[0] left-[0] '></div>
            <div className='font-primary text-white pl-[50px]'>
            <h1 className='text-[36px] font-bold w-[691px] '>Modern natural oil and gas refineries.</h1>
            <button className='py-[13px] px-[40px] bg-[#F40404] mt-[19px]  font-semibold'>Learn More</button>
            </div>
    </div>
      </div>
    </Flex>
    <Flex>
      <div className='w-[50%]'>
           <div className='z-[1] relative bg-[url(./assets/service2.png)] pt-[147px] pb-[139px] bg-no-repeat bg-cover bg-center'>
      <div className='z-[-1] absolute w-full h-full bg-black/60 top-[0] left-[0] '></div>
            <div className='font-primary text-white pl-[50px]'>
            <h1 className='text-[36px] font-bold w-[541px] '>Supply of national industries.</h1>
            <button className='py-[13px] px-[40px] bg-[#F40404] mt-[19px]  font-semibold'>Learn More</button>
            </div>
    </div>
      </div><div className='w-[50%]'>
           <div className='z-[1] relative bg-[url(./assets/service3.png)] pt-[147px] pb-[139px] bg-no-repeat bg-cover bg-center'>
      <div className='z-[-1] absolute w-full h-full bg-black/60 top-[0] left-[0] '></div>
            <div className='font-primary text-white pl-[50px]'>
            <h1 className='text-[36px] font-bold w-[687px] '>National fuel distribution and supply.</h1>
            <button className='py-[13px] px-[40px] bg-[#F40404] mt-[19px] font-semibold'>Learn More</button>
            </div>
    </div>
      </div>
    </Flex>
    </>
  )
}

export default Service