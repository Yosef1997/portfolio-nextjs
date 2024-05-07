import React from "react"
import FormRow from "./FormRow"

const ContactForm = () => {
  return (
    <div>
      <h2 className='text-6xl font-medium text-black text-start'>
        Let’s build something cool together
      </h2>
      <FormRow name='Name' defaultValue='James Robert' />
      <FormRow name='Email' defaultValue='ayush.barnwal@brightscout.com' />
      <FormRow name='Subject' defaultValue='For web design work Enquire' />
      <FormRow name='Message' rows={5} defaultValue='Type your Message' />
      <button className='py-6 px-12 rounded-[170px] border bg-black font-neue-montreal text-lg font-medium text-left mt-8 text-off-white'>
        Submit
      </button>
    </div>
  )
}

export default ContactForm
