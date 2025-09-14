import React from 'react'

const BackgroundImage = ({children,className}) => {
  return (
   <div className={`${className} z-[1] relative pt-[147px] pb-[139px] bg-no-repeat bg-cover bg-center`}>{children}</div>
  )
}

export default BackgroundImage