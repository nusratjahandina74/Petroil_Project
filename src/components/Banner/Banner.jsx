import React from 'react'
import Container from '../Layouts/Container'

const Banner = () => {
  return (
    <div className='z-[1] relative bg-[url(./assets/banner.png)] py-[257px] bg-no-repeat bg-cover bg-center'>
      <div className='z-[-1] absolute w-full h-full bg-black/60 top-[0] left-[0] '></div>
      <Container>
        <div className='font-primary text-white'>
          <h1 className='text-[64px] font-bold w-[842px]'>We exist since 1975 on the oil and gas industry.</h1>
          <button className='py-[13px] px-[40px] bg-[#F40404] mt-[31px] font-semibold hover:bg-transparent border-2 border-[#F40404] hover:border-white duration-500 ease-in-out'>LEARN MORE</button>
        </div>
      </Container>

    </div>
  )
}

export default Banner