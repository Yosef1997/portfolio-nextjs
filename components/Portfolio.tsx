import React from "react"
import workUtils from "@/utils/works"

const Portfolio = () => {
  const { workImages } = workUtils

  return (
    <div className='grid grid-cols-4 gap-x-10 w-full overflow-auto overflow-x-hidden'>
      {workImages.map((e, i) => {
        return (
          <img
            key={i}
            className='p-8 rounded-lg bg-light-grey mb-10 '
            src={e}
            alt='image'
          />
        )
      })}
    </div>
  )
}

export default Portfolio
