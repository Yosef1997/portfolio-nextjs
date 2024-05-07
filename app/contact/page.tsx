import React from "react"
import navUtil from "@/utils/nav"
import { Navbar, ContactProfile, ContactForm, Footer } from "@/components"

const Contact = () => {
  const { headerNav } = navUtil

  return (
    <div>
      <Navbar
        title='@Ayush Barnwal'
        navList={headerNav}
        textColor={"text-black"}
      />
      <div className='grid grid-cols-2 p-20'>
        <ContactProfile />
        <ContactForm />
      </div>
      <Footer isLanding={false} />
    </div>
  )
}

export default Contact
