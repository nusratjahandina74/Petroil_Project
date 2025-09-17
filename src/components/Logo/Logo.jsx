import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import logoOne from "../../assets/logoOne.png"
import logoTwo from "../../assets/logoTwo.png"
import logoThree from "../../assets/logoThree.png"
import logoFour from "../../assets/logoFour.png"
const Logo = () => {
  return (
    <div className='py-[117px]'>
        <Container>
            <Flex className='flex items-center gap-x-[26px]'>
              <img src={logoOne} alt="#logoOne" />
              <img src={logoTwo} alt="#logoTwo" />
              <img src={logoThree} alt="#logoThree" />
              <img src={logoFour} alt="#logoFour" />
            </Flex>
        </Container>
    </div>
  )
}

export default Logo