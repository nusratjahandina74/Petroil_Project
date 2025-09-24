import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import { FaAngleRight } from "react-icons/fa";
import BackgroundOverlay from '../Layouts/BackgroundOverlay';
const Blog = () => {
    return (
        <div className='bg-[#F0F0F0] py-[30px] md:pt-[110px] md:pb-[162px] font-primary'>
            <Container>
                <Flex className='flex-col md:flex-row md:justify-between'>
                    <div className='w-auto md:w-[30%]'>
                        <div className='z-[1] relative bg-[url(./assets/blog1.png)] pt-[75px] pb-[55px] md:pl-[46px] md:pr-[44px] bg-no-repeat bg-cover bg-center mb-[10px] md:mb-0'>
                            <BackgroundOverlay />
                            <div className='text-white'>
                                <h1 className='text-[20px] text-center md:text-left md:text-[24px] font-bold w-auto md:w-[249px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                                <div className='flex justify-center md:flex-none md:justify-start'>
                                    <button className='py-[5px] px-[11px] md:py-[10px] md:px-[22px] text-[#FFFFFF] mt-[10px] md:mt-[52px] text-[10px] md:text-[12px] font-semibold bg-white/50 hover:bg-white hover:text-black duration-500 ease-in-out'>Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-auto md:w-[30%]'>
                        <div className='z-[1] relative bg-[url(./assets/blog2.png)] pt-[75px] pb-[55px] md:pl-[46px] md:pr-[44px] bg-no-repeat bg-cover bg-center mb-[10px] md:mb-0'>
                            <BackgroundOverlay />
                            <div className='text-white'>
                                <h1 className='text-[20px] text-center md:text-left md:text-[24px] font-bold w-auto md:w-[249px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                                <div className='flex justify-center md:flex-none md:justify-start'>
                                    <button className='py-[5px] px-[11px] md:py-[10px] md:px-[22px] text-[#FFFFFF] mt-[10px] md:mt-[52px] text-[10px] md:text-[12px] font-semibold bg-white/50 hover:bg-white hover:text-black duration-500 ease-in-out'>Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-auto md:w-[30%]'>
                        <div className='z-[1] relative bg-[url(./assets/blog3.png)] pt-[75px] pb-[55px] md:pl-[46px] md:pr-[44px] bg-no-repeat bg-cover bg-center mb-[10px] md:mb-0'>
                            <BackgroundOverlay />
                            <div className='text-white'>
                                <h1 className='text-[20px] text-center md:text-left md:text-[24px] font-bold w-auto md:w-[249px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                                <div className='flex justify-center md:flex-none md:justify-start'>
                                    <button className='py-[5px] px-[11px] md:py-[10px] md:px-[22px] text-[#FFFFFF] mt-[10px] md:mt-[52px] text-[10px] md:text-[12px] font-semibold bg-white/50 hover:bg-white hover:text-black duration-500 ease-in-out'>Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Flex>

                <Flex className='flex-row items-center justify-end md:pt-[29px]'>

                    <h6 className='font-bold text-black text-[14px] md:text-base'>MORE FROM THE BLLOG</h6>
                    <FaAngleRight className='w-[14px] h[14px] md:w-[25px] md:h-[25px]' />

                </Flex>

            </Container>
        </div>
    )
}

export default Blog