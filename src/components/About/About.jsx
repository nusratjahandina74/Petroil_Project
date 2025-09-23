import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const About = () => {
  return (
    <div className='py-[50px] md:py-[136px] bg-[#F0F0F0]'>
      <Container>
        <Flex className='flex-row'>
          <div className='py-[30px] md:py-[100px] px-[30px] md:px-[77px] bg-[#F40404] font-primary text-white'>
            <h4 className='font-bold text-[20px] md:text-[36px] w-auto md:w-[262px]'>Learn more about our company</h4>
          </div>
          <div>
            <div className='bg-[url(./assets/about.png)] py-[50px] px-[50px] md:pt-[168px] md:pb-[142px] md:px-[282px] bg-no-repeat bg-cover bg-center'>
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