import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const Contact = () => {
  return (
    <div className='bg-[#F40404] py-[46px] border-b-5 border-[#FFB800]'>
      <Container>
        <Flex className='flex justify-between font-primary text-white items-center'>
          <h2 className='font-bold text-[36px] w-[959px]'>Want to join as member branch in your area?</h2>
          <button className='border-2 py-[13px] px-[32px] font-semibold hover:bg-white hover:text-black border hover:border-transparent duration-500 ease-in-out'>CONTACT</button>
        </Flex>
      </Container>
    </div>
  )
}

export default Contact