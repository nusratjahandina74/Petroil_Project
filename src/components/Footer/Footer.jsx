import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import footerLogo from '../../assets/footerLogo.png'
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className='pt-[80px] md:pt-[149px] bg-[#1F1F1F] font-primary text-white'>
                <Container>
                    <Flex className='flex-row justify-between pb-[80px] md:pb-[149px] items-center'>
                        <div>
                            <img className='w-[100px] md:w-auto' src={footerLogo} alt="#footerLogo" />
                            <Flex className='flex-row space-x-[2px] md:space-x-[5px] mt-[15px] md:mt-[33px]'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.875 15H2.5L2.49812 5.56625L9.64437 10.5138C9.74887 10.5861 9.87293 10.6248 10 10.6248C10.1271 10.6248 10.2511 10.5861 10.3556 10.5138L17.5 5.56875V11.25H18.75V5C18.7495 4.66863 18.6176 4.35098 18.3833 4.11666C18.149 3.88235 17.8314 3.7505 17.5 3.75H2.5C2.16858 3.75033 1.85083 3.88213 1.61648 4.11648C1.38213 4.35083 1.25033 4.66858 1.25 5V15C1.2505 15.3314 1.38235 15.649 1.61666 15.8833C1.85098 16.1176 2.16863 16.2495 2.5 16.25H11.875V15ZM16.1244 5L10 9.24L3.87563 5H16.1244Z" fill="white" />
                                    <path d="M16.25 17.5009C17.6307 17.5009 18.75 16.3814 18.75 15.0004C18.75 13.6195 17.6307 12.5 16.25 12.5C14.8693 12.5 13.75 13.6195 13.75 15.0004C13.75 16.3814 14.8693 17.5009 16.25 17.5009Z" fill="white" />
                                </svg>
                                <p className='text-[10px] md:text-[14px]'>mail@yourcompany.com</p>
                            </Flex>
                            <Flex className='flex-row space-x-[2px] md:space-x-[5px] my-[7px] md:my-[15px]'>
                                <FiPhoneCall size={20} />
                                <p className='text-[10px] md:text-[14px]'>+896 120 5889 (Toll free)</p>
                            </Flex>
                            <Flex className='flex-row space-x-[2px] md:space-x-[2px] mb-[15px] md:mb-[34px]'>


                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 15L6.19376 9.625C5.57075 8.88942 5.16954 7.99197 5.03686 7.03718C4.90418 6.08239 5.04549 5.10956 5.44433 4.23197C5.84317 3.35439 6.48313 2.60818 7.28967 2.08024C8.09622 1.55231 9.03616 1.26439 10 1.25C11.3361 1.2632 12.6125 1.80537 13.5497 2.75776C14.4868 3.71015 15.0083 4.99512 15 6.33125C15.0005 7.49683 14.6037 8.62778 13.875 9.5375L10 15ZM10 2.5C8.99492 2.51154 8.03549 2.92149 7.33239 3.63982C6.6293 4.35815 6.24001 5.32614 6.25001 6.33125C6.2542 7.24864 6.58425 8.13469 7.18126 8.83125L10 12.825L12.8938 8.75C13.4438 8.0634 13.7456 7.211 13.75 6.33125C13.76 5.32614 13.3707 4.35815 12.6676 3.63982C11.9645 2.92149 11.0051 2.51154 10 2.5Z" fill="white" />
                                    <path d="M10 6.875C10.6904 6.875 11.25 6.31536 11.25 5.625C11.25 4.93464 10.6904 4.375 10 4.375C9.30964 4.375 8.75 4.93464 8.75 5.625C8.75 6.31536 9.30964 6.875 10 6.875Z" fill="white" />
                                    <path d="M17.5 7.5H16.25V8.75H17.5V17.5H2.5V8.75H3.75V7.5H2.5C2.16848 7.5 1.85054 7.6317 1.61612 7.86612C1.3817 8.10054 1.25 8.41848 1.25 8.75V17.5C1.25 17.8315 1.3817 18.1495 1.61612 18.3839C1.85054 18.6183 2.16848 18.75 2.5 18.75H17.5C17.8315 18.75 18.1495 18.6183 18.3839 18.3839C18.6183 18.1495 18.75 17.8315 18.75 17.5V8.75C18.75 8.41848 18.6183 8.10054 18.3839 7.86612C18.1495 7.6317 17.8315 7.5 17.5 7.5Z" fill="white" />
                                </svg>
                                <p className='text-[10px] md:text-[14px]'>101 Baker Street, New York, USA, 12345</p>

                            </Flex>
                            <Flex className='flex-row space-x-[6px] md:pace-x-[12px]'>

                                <div className='px-[7px] py-[7px] rounded-full text-white bg-[#F40404] text-center '>
                                    <FaFacebookF />
                                </div>
                                <div className='px-[7px] py-[7px] rounded-full text-white bg-[#F40404] text-center '>
                                    <FaTwitter />
                                </div>
                                <div className='px-[7px] py-[7px] rounded-full text-white bg-[#F40404] text-center '>
                                    <FaLinkedinIn />
                                </div>
                                <div className='px-[7px] py-[7px] rounded-full text-white bg-[#F40404] text-center '>
                                    <FaInstagram />
                                </div>
                            </Flex>
                        </div>
                        <div className='font-primary text-white pb-[50px] ml-[5px] md:pb-0 md:pl-0'>
                            <h5 className='font-bold mb-[10px] md:mb-[21px] text-[12px] md:text-base'>Company</h5>
                            <p className='text-[10px] md:text-[14px] mb-[5px] md:mb-[15px] hover:text-red-500 duration-150'>Home</p>
                            <p className='text-[10px] md:text-[14px] mb-[5px] md:mb-[15px] hover:text-red-500 duration-150'>About</p>
                            <p className='text-[10px] md:text-[14px] mb-[5px] md:mb-[15px] hover:text-red-500 duration-150'>Services</p>
                            <p className='text-[10px] md:text-[14px] hover:text-red-500 duration-150'>Gallery</p>
                        </div>
                        <div className='font-primary text-white pb-[17px] ml-[5px] md:pb-0 md:pl-0'>
                            <h5 className='font-bold mb-[10px] md:mb-[21px] text-[12px] md:text-base'>Others</h5>
                            <p className='text-[10px] md:text-[14px] mb-[5px] md:mb-[15px] hover:text-red-500 duration-150'>Blog</p>
                            <p className='text-[10px] md:text-[14px] mb-[5px] md:mb-[15px] hover:text-red-500 duration-150'>Contact</p>
                            <p className='text-[10px] md:text-[14px] mb-[5px] md:mb-[15px] hover:text-red-500 duration-150'>Terms & Conditions</p>
                            <p className='text-[10px] md:text-[14px] hover:text-red-500 duration-150'>Privacy Policy</p>
                        </div>
                        <div className='font-primary text-white pb-[90px] md:pb-[80px]'>
                            <h5 className='font-bold mb-[10px] md:mb-[21px] text-[12px] md:text-base'>Certificate</h5>
                            <Flex className='flex-row space-x-[2px] md:space-x-[5px]'>
                                <div className='bg-white py-[1px] md:py-[6px] pl-[1px] md:pl-[9px] pr-[5px] md:pr-[24px] font-primary outline-none rounded-[4px]'>
                                    <h6 className='text-[8px] md:text-[24px] text-[#008AD8] font-bold'>ISO 88</h6>
                                    <p className='text-[4px] md:text-[8px] text-[#008AD8] font-medium'>Environmentally Safe</p>
                                </div>
                                <div className='bg-white py-[2px] px-[2px] md:py-[10px] md:px-[10px] font-primary outline-none rounded-[4px]'>
                                    <h6 className='text-[8px] md:text-[14px] font-bold text-center my-[5px] md:my-[10px]'><span className='text-[#980077]'>Liquid</span><span className='text-[#009818]'>Green</span></h6>
                                </div>
                            </Flex>

                        </div>
                    </Flex>
                </Container>
            </div>
            <div className='py-[20px] md:py-[42px] bg-[#282828] font-primary'>
                <Container>
                    <p className='font-medium text-[#6C6C6C] text-[12px] md:text-base w-auto md:w-[509px]'>© Copyright 2024 by AltDesain Studio – All right reserved.</p>
                </Container>
            </div>
        </>

    )
}

export default Footer