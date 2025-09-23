import React from 'react'

const BackgroundImage = ({ children, className }) => {
  return (
    <div className={`${className} z-[1] relative py-[20px] pl-[10px] pr-[50px] md:px-0 md:pt-[147px] md:pb-[139px] bg-no-repeat bg-cover bg-center`}>{children}</div>
  )
}

export default BackgroundImage