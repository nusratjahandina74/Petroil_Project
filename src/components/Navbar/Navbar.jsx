import React from 'react'
import Container from '../Layouts/Container'
import  Flex from '../Layouts/Flex'
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className='bg-[#F40404]'>
            <Container>
                <Flex className='flex py-[30px] text-white justify-between'>

                    <Flex className='flex items-center'>
                        <div>
                            <img src={logo} alt="#logo" />
                        </div>
                    </Flex>
                    <Flex className='flex items-center'>
                        <div>
                            <ul>
                                <Flex className='flex items-center space-x-[49px] font-primary font-semibold text-[16px] '>
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
            </Container>
        </div>
    )
}
export default Navbar