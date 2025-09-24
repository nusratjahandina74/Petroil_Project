import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Container from '../Layouts/Container';
import Flex from '../Layouts/Flex';
const Header = () => {
    return (
        <div className='bg-[#282828] border-b-5 border-[#FFB800]'>
            <Container >
                <div className='font-primary py-[12px] md:py-[15px] text-white'>
                    <Flex className='flex-row justify-between items-center'>
                        <Flex className='flex-col md:flex-row space-x-[49px]'>
                            <Flex className='flex-row items-center space-x-[5px]'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.875 14.9999H2.5L2.49812 5.5662L9.64437 10.5137C9.74887 10.586 9.87293 10.6247 10 10.6247C10.1271 10.6247 10.2511 10.586 10.3556 10.5137L17.5 5.5687V11.2499H18.75V4.99995C18.7495 4.66858 18.6176 4.35092 18.3833 4.11661C18.149 3.8823 17.8314 3.75044 17.5 3.74995H2.5C2.16858 3.75028 1.85083 3.88208 1.61648 4.11643C1.38213 4.35078 1.25033 4.66853 1.25 4.99995V14.9999C1.2505 15.3313 1.38235 15.649 1.61666 15.8833C1.85098 16.1176 2.16863 16.2495 2.5 16.2499H11.875V14.9999ZM16.1244 4.99995L10 9.23995L3.87563 4.99995H16.1244Z" fill="white" />
                                    <path d="M16.25 17.5008C17.6307 17.5008 18.75 16.3814 18.75 15.0004C18.75 13.6194 17.6307 12.4999 16.25 12.4999C14.8693 12.4999 13.75 13.6194 13.75 15.0004C13.75 16.3814 14.8693 17.5008 16.25 17.5008Z" fill="white" />
                                </svg>
                                <p className='text-[12px]'>mail@yourcompany.com</p>
                            </Flex>
                            <Flex className="flex-row relative md:after:content-[''] md:after:absolute md:after:top-[3px] md:after:left-[-27px] md:after:w-[2px] md:after:h-[16px] md:after:bg-[#5C6A92] md:space-x-[5px] items-center">
                                <FiPhoneCall size={20} />
                                <p className='text-[12px]'>+896 120 5889 (Toll free)</p>
                            </Flex>
                        </Flex>
                        <div>
                            <Flex className='flex-row space-x-[10px] md:space-x-[19px]'>
                                <RiFacebookFill size={16} />
                                <FaTwitter size={16} />
                                <FaLinkedinIn size={16} />
                                <FaInstagram size={16} />
                            </Flex>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div>
    )
}

export default Header