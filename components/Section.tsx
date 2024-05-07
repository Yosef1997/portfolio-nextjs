import React, { ReactNode } from "react"
interface sectionProps {
  title: string
  child: ReactNode
}

const Section: React.FC<sectionProps> = ({ title, child }) => {
  return (
    <div className='grid grid-cols-3 p-20'>
      <div className='text-5xl font-neue-montreal text-left font-medium col-span-1'>
        {title}
      </div>
      <div className='col-span-2'>{child}</div>
    </div>
  )
}

export default Section
