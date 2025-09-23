import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const Contact = () => {
  return (
    <div className='bg-[#F40404] py-[15px] md:py-[46px] border-b-5 border-[#FFB800]'>
      <Container>
        <Flex className='flex-row justify-between font-primary text-white items-center'>
          <h2 className='font-bold text-[18px] md:text-[36px] w-auto md:w-[959px]'>Want to join as member branch in your area?</h2>
          <button className='border-2 py-[7px] px-[16px] md:py-[13px] md:px-[32px] text-[14px] md:text-base font-semibold hover:bg-white hover:text-black border hover:border-transparent duration-500 ease-in-out'>CONTACT</button>
        </Flex>
      </Container>
    </div>
  )
}

export default Contact