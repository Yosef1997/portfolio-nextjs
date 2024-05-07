import React from "react"
import Section from "./Section"
import workUtil from "../utils/works"
import { FiArrowUpRight } from "react-icons/fi"

const Project = () => {
  const { workUrl } = workUtil

  return (
    <Section
      title='Recent Work'
      child={
        <div>
          {workUrl.map((e, i) => {
            return (
              <div
                key={i}
                className='flex relative items-center border-b border-light-grey mb-[30px] pb-[30px]'
              >
                <div className='flex flex-col gap-4.5'>
                  <h1 className='text-6xl text-black text-left font-neue-montreal'>
                    {e.url}
                  </h1>
                  <h6 className='text-lg text-left text-dark-grey'>
                    {e.description}
                  </h6>
                </div>
                <button className='bg-transparent rounded-[180px] border border-dark-grey absolute right-0 p-5 hover:bg-black hover:text-off-white'>
                  <FiArrowUpRight size={32} />
                </button>
              </div>
            )
          })}
        </div>
      }
    />
  )
}

export default Project
