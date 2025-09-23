import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const Supplier = () => {
    return (
        <div className='py-[50px] md:pt-[78px] md:pb-[100px] '>

            <Container>
                <Flex className='flex-col md:flex-row items-center justify-between font-primary text-black' >

                    <h4 className='md:w-[289px] text-[24px] md:text-[48px] font-bold'>The biggest supplier on the country</h4>
                    <p className='text-[#6C6C6C] font-medium text-[14px] text-justify md:text-base w-auto md:w-[651px] mt-[5px] md:mt-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>

                </Flex>
            </Container>






        </div>
    )
}

export default Supplier