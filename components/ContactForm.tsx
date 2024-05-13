"use client"
import React from "react"
import FormRow from "./FormRow"
import { useFormik } from "formik"
import * as Yup from "yup"

type Contact = {
  name: string
  email: string
  subject: string
  message: string
}

async function postContact(contact: Contact) {
  try {
    const response = await fetch("http://localhost:2000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })

    if (!response.ok) {
      throw new Error("Failed to add user.")
    }

    const data = await response.json()
    console.log("User added:", data)
  } catch (error) {
    console.log(error)
  }
}

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values))
      postContact(values)
    },
  })

  return (
    <div>
      <h2 className='text-6xl font-medium text-black text-start'>
        Let’s build something cool together
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col mt-9'>
          <label
            htmlFor='firstName'
            className='font-neue-montreal text-lg text-left text-black'
          >
            Name
          </label>
          <input
            className='border-b border-black text-1.75 text-dark-grey font-neue-montreal focus:outline-none'
            id='name'
            type='text'
            placeholder='James Robert'
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='text-red'>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className='flex flex-col mt-9'>
          <label
            htmlFor='email'
            className='font-neue-montreal text-lg text-left text-black'
          >
            Email
          </label>
          <input
            className='border-b border-black text-1.75 text-dark-grey font-neue-montreal  focus:outline-none'
            id='email'
            type='email'
            placeholder='ayush.barnwal@brightscout.com'
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='text-red'>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className='flex flex-col mt-9'>
          <label
            htmlFor='subject'
            className='font-neue-montreal text-lg text-left text-black'
          >
            Subject
          </label>
          <input
            className='border-b border-black text-1.75 text-dark-grey font-neue-montreal  focus:outline-none'
            id='subject'
            type='text'
            placeholder='For web design work Enquire'
            {...formik.getFieldProps("subject")}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className='text-red'>{formik.errors.subject}</div>
          ) : null}
        </div>

        <div className='flex flex-col mt-9'>
          <label
            htmlFor='message'
            className='font-neue-montreal text-lg text-left text-black'
          >
            Message
          </label>
          <textarea
            className='border-b border-black text-1.75 text-dark-grey font-neue-montreal  focus:outline-none'
            id='message'
            rows={4}
            placeholder='Type your Message'
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className='text-red'>{formik.errors.message}</div>
          ) : null}
        </div>

        <button
          type='submit'
          className='py-6 px-12 rounded-[170px] border bg-black font-neue-montreal text-lg font-medium text-left mt-8 text-off-white'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
