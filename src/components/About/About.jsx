import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const About = () => {
  return (
    <div className='py-[136px] bg-[#F0F0F0]'>
      <Container>
        <Flex className='flex'>
          <div className='py-[100px] px-[77px] bg-[#F40404] font-primary text-white'>
            <h4 className='font-bold text-[36px] w-[262px]'>Learn more about our company</h4>
          </div>
          <div>
            <div className='bg-[url(./assets/about.png)] pt-[168px] pb-[142px] px-[282px] bg-no-repeat bg-cover bg-center'>
              <div className='font-primary text-[#F40404]'>
                <button className='py-[14px] px-[30px] bg-white mt-[19px] font-semibold hover:bg-transparent border-2 border-white hover:border-white hover:text-white duration-500 ease-in-out'>Learn More</button>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </div>

  )
}

export default About