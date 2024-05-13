"use client"

import { useState } from "react"
import ScrollContext, { ScrollContextProps } from "./ScrollContext"

const ScrollProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  let [showElement, setShowElement] = useState<boolean>(false)
  let [showSidebar, setShowSidebar] = useState<boolean>(false)

  const value: ScrollContextProps = {
    showElement,
    setShowElement,
    showSidebar,
    setShowSidebar,
  }

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  )
}

export default ScrollProvider
