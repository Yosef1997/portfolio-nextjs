"use client"
import { AboutUs, Footer, Hero, Project, Portfolio } from "@/components"
import ScrollContext from "@/context/ScrollContext"
import { useContext, useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Home() {
  const {
    showElement,
    showSidebar,
    setShowSidebar: setShowSidebarGlobal,
  } = useContext(ScrollContext)

  const toggleSidebar = () => {
    setShowSidebarGlobal(!showSidebar)
    console.log(showSidebar)
  }

  return (
    <div>
      <Hero />
      <div className='relative'>
        {showElement && !showSidebar ? (
          <button
            className='fixed top-5 right-5 bg-black text-white p-5 rounded-full z-50'
            onClick={toggleSidebar}
          >
            <GiHamburgerMenu size={60} />
          </button>
        ) : null}
        <AboutUs />
        <Project />
        <Portfolio />
        <Footer />
      </div>
    </div>
  )
}
