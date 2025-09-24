import React from 'react'

const BackgroundImage = ({ children, className }) => {
  return (
    <div className={`${className} z-[1] relative py-[70px] mb-[10px] md:mb-0 md:pt-[147px] md:pb-[139px] bg-no-repeat bg-cover bg-center`}>{children}</div>
  )
}

export default BackgroundImage