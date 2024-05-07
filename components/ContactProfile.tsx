import React from "react"
import navUtil from "@/utils/nav"
import Link from "next/link"

type navObj = {
  text: string
  path: string
}

const ContactProfile = () => {
  const { footerNav } = navUtil
  const newArr: navObj[] = [...footerNav, { text: "Figma", path: "/" }]

  return (
    <div>
      <img
        className='w-[297px] h-[297px] rounded-[185.63px] mb-14'
        src={"/medium-profile-img.png"}
        alt='contact-img'
      />
      <p className='font-neue-montreal text-dark-grey text-start mb-2 text-lg'>
        Contact Details
      </p>
      <h5 className='text-[27px] text-start text-black'>
        ayush.barnwal@brightscout.com
      </h5>
      <h5 className='text-[27px] text-start text-black'>+91 8651447521</h5>
      <div className='h-10'></div>
      <p>Contact Details</p>
      {newArr.map((e, i) => {
        return (
          <Link href={e.path} key={i}>
            <h5 className='text-black'>{e.text}</h5>
          </Link>
        )
      })}
    </div>
  )
}

export default ContactProfile
