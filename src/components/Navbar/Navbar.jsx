import React from 'react'
import Container from '../Layouts/Container'
import  Flex from '../Layouts/Flex'
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className='bg-[#F40404]'>
            <Container>
                <Flex className='py-[30px] text-white justify-between'>

                    <Flex className='items-center'>
                        <div>
                            <img src={logo} alt="#logo" />
                        </div>
                    </Flex>
                    <Flex className='items-center'>
                        <div>
                            <ul>
                                <Flex className=' items-center space-x-[49px] font-primary font-semibold text-[16px] '>
                                    <li><a href=''>Home</a></li>
                                    <li><a href=''>About</a></li>
                                    <li><a href=''>Services</a></li>
                                    <li><a href=''>Gallery</a></li>
                                    <li><a href=''>Blog</a></li>
                                    <li className='border-2 py-[13px] px-[32px]'><a href=''>CONTACT</a></li>
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