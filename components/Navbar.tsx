import Link from "next/link"
import React from "react"

type navObj = {
  text: string
  path: string
}

interface NavProps {
  title: string
  navList: navObj[]
  textColor: string
}

const Navbar: React.FC<NavProps> = ({ title, navList, textColor }) => {
  return (
    <div className='flex items-center justify-between px-20 py-7'>
      <h6 className={`text-lg font-neue-montreal ${textColor}`}>{title}</h6>
      <div className='flex items-center gap-x-10'>
        {navList.map((e) => {
          return (
            <Link href={e.path} key={e.text}>
              <h6 className={`${textColor}`}>{e.text}</h6>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
