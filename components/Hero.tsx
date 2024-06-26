"use client"

import React, { useContext, useEffect, useState } from "react"
import navUtil from "@/utils/nav"
import { Navbar } from "@/components"
import SideBar from "./SideBar"
import ScrollContext from "@/context/ScrollContext"

const Hero = () => {
  const { headerNav } = navUtil
  const {
    showElement,
    setShowElement: setShowElementGlobal,
    showSidebar,
    setShowSidebar: setShowSidebarGlobal,
  } = useContext(ScrollContext)

  const toggleSidebar = () => {
    setShowSidebarGlobal(!showSidebar)
    console.log(showSidebar)
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const viewportHeight = window.innerHeight
    if (scrollPosition > viewportHeight) {
      setShowElementGlobal(true)
    } else {
      setShowElementGlobal(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showElement])

  console.log(showElement)

  return (
    <>
      <div className='bg-light-grey h-svh overflow-x-hidden'>
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
