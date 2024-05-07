"use client"

import React, { useState } from "react"
import navUtil from "@/utils/nav"
import { Navbar } from "@/components"
import SideBar from "./SideBar"

const Hero = () => {
  const { headerNav } = navUtil
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
    console.log(showSidebar)
  }

  return (
    <>
      <div className='bg-light-grey min-h-svh overflow-x-hidden'>
        <Navbar
          title='@Ayush Barnwal'
          navList={headerNav}
          textColor={"text-black"}
        />
        <img
          src={"/hero.png"}
          className='absolute bottom-0 right-1/2 translate-x-1/2'
        />
        <button
          className='bg-black flex items-center justify-around absolute gap-6 p-[30px] text-white text-5xl font-neue-montreal font-medium bottom-1/2 right-0 rounded-s-full group'
          onClick={toggleSidebar}
        >
          <img src={"/hero-menu.png"} />
          <span className='group-hover:block hidden'>Hi I’m Ayush</span>
        </button>
        <div className='absolute bottom-0 py-12 animate-marquee whitespace-nowrap '>
          <span className='text-off-white font-neue-montreal font-medium text-9xl'>
            - Webflow Developer - UI/UX Designer - Webflow Developer
          </span>
        </div>
      </div>

      {showSidebar ? <SideBar onClick={toggleSidebar} /> : null}
    </>
  )
}

export default Hero
