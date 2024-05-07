import React from "react"
import Navbar from "./Navbar"
import navUtil from "@/utils/nav"

const Footer: React.FC<{ isLanding?: boolean }> = ({ isLanding }) => {
  const { footerNav } = navUtil
  return (
    <div className='bg-black'>
      {isLanding ?? (
        <div className='flex items-center justify-between p-20'>
          <p className='text-6xl font-medium text-off-white font-neue-montreal'>
            Have something in mind? <br />
            <span className='flex gap-x-3 font-neue-montreal'>
              <img
                className='h-20 w-20 rounded-[50px]'
                src={"/medium-profile-img.png"}
                alt='footerImg'
              />
              let’s build it together.
            </span>
          </p>
          <button className='text-lg font-neue-montreal font-medium text-black bg-off-white py-6 px-12 rounded-[170px]'>
            Get in touch
          </button>
        </div>
      )}

      <Navbar
        title='Build with 💖 by Brightscout & Ayush '
        navList={footerNav}
        textColor='text-off-white'
      />
    </div>
  )
}

export default Footer
