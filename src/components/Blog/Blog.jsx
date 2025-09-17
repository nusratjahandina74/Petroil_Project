import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import { FaAngleRight } from "react-icons/fa";
const Blog = () => {
    return (
        <div className='bg-[#F0F0F0] pt-[110px] pb-[162px] font-primary'>
            <Container>
                <Flex className='flex justify-between'>
                    <div className='w-[30%]'>
                        <div className='z-[1] relative bg-[url(./assets/blog1.png)] pt-[75px] pb-[55px] pl-[46px] pr-[44px] bg-no-repeat bg-cover bg-center'>
                            <div className='z-[-1] absolute w-full h-full bg-black/60 top-[0] left-[0] '></div>
                            <div className='text-white'>
                                <h1 className='text-[24px] font-bold w-[249px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                                <button className='py-[10px] px-[22px] text-[#FFFFFF] mt-[52px] text-[12px] font-semibold bg-white/50 hover:bg-white hover:text-black duration-500 ease-in-out'>Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[30%]'>
                        <div className='z-[1] relative bg-[url(./assets/blog2.png)] pt-[75px] pb-[55px] pl-[46px] pr-[44px] bg-no-repeat bg-cover bg-center'>
                            <div className='z-[-1] absolute w-full h-full bg-black/60 top-[0] left-[0] '></div>
                            <div className='text-white'>
                                <h1 className='text-[24px] font-bold w-[249px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                                <button className='py-[10px] px-[22px] text-[#FFFFFF] mt-[52px] text-[12px] font-semibold bg-white/50 hover:bg-white hover:text-black duration-500 ease-in-out'>Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[30%]'>
                        <div className='z-[1] relative bg-[url(./assets/blog3.png)] pt-[75px] pb-[55px] pl-[46px] pr-[44px] bg-no-repeat bg-cover bg-center'>
                            <div className='z-[-1] absolute w-full h-full bg-black/60 top-[0] left-[0] '></div>
                            <div className='text-white'>
                                <h1 className='text-[24px] font-bold w-[249px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                                <button className='py-[10px] px-[22px] text-[#FFFFFF] mt-[52px] text-[12px] font-semibold bg-white/50 hover:bg-white hover:text-black duration-500 ease-in-out'>Read more</button>
                            </div>
                        </div>
                    </div>
                </Flex>
                
                    <Flex className='flex items-center justify-end pt-[29px]'>
                       
                        <h6 className='font-bold text-black'>MORE FROM THE BLLOG</h6>
                        <FaAngleRight size={25} />
                      
                    </Flex>
                
            </Container>
        </div>
    )
}

export default Blog