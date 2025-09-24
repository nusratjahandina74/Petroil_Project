import React, { useState } from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import logo from "../../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='bg-[#F40404]'>
            <Container>
                <Flex className='hidden md:flex py-[30px] text-white justify-between'>

                    <Flex className='md:flex items-center'>
                        <div>
                            <img src={logo} alt="#logo" />
                        </div>
                    </Flex>
                    <Flex className='md:flex items-center'>
                        <div className='hidden md:block'>
                            <ul>
                                <Flex className='hidden md:flex items-center space-x-[49px] font-primary font-semibold text-[16px] list-none '>
                                    <li className='hover:text-black duration-300'><a href=''>Home</a></li>
                                    <li className='hover:text-black duration-300'><a href=''>About</a></li>
                                    <li className='hover:text-black duration-300'><a href=''>Services</a></li>
                                    <li className='hover:text-black duration-300'><a href=''>Gallery</a></li>
                                    <li className='hover:text-black duration-300'><a href=''>Blog</a></li>
                                    <li className='border-2 py-[13px] px-[32px] hover:bg-white hover:text-black border hover:border-transparent duration-500 ease-in-out'><a href=''>CONTACT</a></li>
                                </Flex>
                            </ul>
                        </div>
                    </Flex>
                </Flex>
                <Flex className='flex items-center justify-between md:hidden text-white py-[20px]'>
                    <div>
                        <img className='w-[150px]' src={logo} alt="#logo" />
                    </div>
                    <div className='block md:hidden'>
                        {
                            show ?
                                <div className='absolute top-[140px] left-0 bg-[#F40404] w-full z-[99999]'>
                                    <Flex className='flex-col font-primary font-semibold text-[14px] list-none ml-[15px] mt-[15px] mb-[50px]'>
                                        <li className='hover:text-black duration-300'><a href=''>Home</a></li>
                                        <li className='hover:text-black duration-300'><a href=''>About</a></li>
                                        <li className='hover:text-black duration-300'><a href=''>Services</a></li>
                                        <li className='hover:text-black duration-300'><a href=''>Gallery</a></li>
                                        <li className='hover:text-black duration-300'><a href=''>Blog</a></li>
                                        <li className='mt-[30px]'><a href='' className='md:w-auto border-2 py-[10px] px-[20px] hover:bg-white hover:text-black border hover:border-transparent duration-500 ease-in-out text-[14px]'>CONTACT</a></li>
                                    </Flex>
                                </div>
                                : ""
                        }
                        {
                            show ?
                                <RxCross2 onClick={() => setShow(false)} className='text-2xl' />
                                :
                                <FaBars onClick={() => setShow(true)} className='text-2xl' />
                        }
                    </div>
                </Flex>
            </Container>
        </div>
    )
}
export default Navbar