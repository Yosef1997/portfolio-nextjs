import React from "react"
interface formRow {
  name: string
  labelText?: string
  rows?: number
  defaultValue?: string
}

const FormRow: React.FC<formRow> = ({
  name,
  labelText,
  rows,
  defaultValue,
}) => {
  return (
    <div className='flex flex-col mt-9'>
      <label
        className='font-neue-montreal text-lg text-left text-black'
        htmlFor={name}
      >
        {labelText || name}
      </label>
      <textarea
        className='border-b border-black text-1.75 text-dark-grey font-neue-montreal'
        id={name}
        name={name}
        rows={rows ?? 1}
        defaultValue={defaultValue || ""}
        required
      />
    </div>
  )
}

export default FormRow
