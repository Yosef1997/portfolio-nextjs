import { createContext } from "react"

const defaultValue = {
  showElement: false,
  setShowElement: () => {},
  showSidebar: false,
  setShowSidebar: () => {},
}

export interface ScrollContextProps {
  showElement: boolean
  setShowElement: (val: boolean) => void
  showSidebar: boolean
  setShowSidebar: (val: boolean) => void
}

const ScrollContext = createContext<ScrollContextProps>(defaultValue)

export default ScrollContext
