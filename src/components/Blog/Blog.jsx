import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import { FaAngleRight } from "react-icons/fa";
const Blog = () => {
    return (
        <div className='bg-[#F0F0F0] py-[30px] md:pt-[110px] md:pb-[162px] font-primary'>
            <Container>
                <Flex className='flex-row justify-between space-x-[2px] md:space-x-0'>
                    <div className='w-auto md:w-[30%]'>
                        <div className='z-[1] relative bg-[url(./assets/blog1.png)] py-[50px] md:pt-[75px] md:pb-[55px] px-[20px] md:pl-[46px] md:pr-[44px] bg-no-repeat bg-cover bg-center'>
                            <div className='z-[-1] absolute w-full h-full bg-black/60 top-[0] left-[0] '></div>
                            <div className='text-white'>
                                <h1 className='text-[12px] md:text-[24px] font-bold w-auto md:w-[249px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                                <button className='py-[5px] px-[11px] md:py-[10px] md:px-[22px] text-[#FFFFFF] mt-[10px] md:mt-[52px] text-[10px] md:text-[12px] font-semibold bg-white/50 hover:bg-white hover:text-black duration-500 ease-in-out'>Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-auto md:w-[30%]'>
                        <div className='z-[1] relative bg-[url(./assets/blog2.png)] py-[50px] md:pt-[75px] md:pb-[55px] px-[20px] md:pl-[46px] md:pr-[44px] bg-no-repeat bg-cover bg-center'>
                            <div className='z-[-1] absolute w-full h-full bg-black/60 top-[0] left-[0] '></div>
                            <div className='text-white'>
                                <h1 className='text-[12px] md:text-[24px] font-bold w-auto md:w-[249px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                                <button className='py-[5px] px-[11px] md:py-[10px] md:px-[22px] text-[#FFFFFF] mt-[10px] md:mt-[52px] text-[10px] md:text-[12px] font-semibold bg-white/50 hover:bg-white hover:text-black duration-500 ease-in-out'>Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-auto md:w-[30%]'>
                        <div className='z-[1] relative bg-[url(./assets/blog3.png)] py-[50px] md:pt-[75px] md:pb-[55px] px-[20px] md:pl-[46px] md:pr-[44px] bg-no-repeat bg-cover bg-center'>
                            <div className='z-[-1] absolute w-full h-full bg-black/60 top-[0] left-[0] '></div>
                            <div className='text-white'>
                                <h1 className='text-[12px] md:text-[24px] font-bold w-auto md:w-[249px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                                <button className='py-[5px] px-[11px] md:py-[10px] md:px-[22px] text-[#FFFFFF] mt-[10px] md:mt-[52px] text-[10px] md:text-[12px] font-semibold bg-white/50 hover:bg-white hover:text-black duration-500 ease-in-out'>Read more</button>
                            </div>
                        </div>
                    </div>
                </Flex>

                <Flex className='flex-row items-center justify-end pt-[10px] md:pt-[29px]'>

                    <h6 className='font-bold text-black text-[12px] md:text-base'>MORE FROM THE BLLOG</h6>
                    <FaAngleRight className='w-[12px] h[12px] md:w-[25px] md:h-[25px]' />

                </Flex>

            </Container>
        </div>
    )
}

export default Blog