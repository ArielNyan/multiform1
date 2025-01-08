import React from 'react'

type CheckboxTypes = {
  title: string,
  description: string,
  price: string
}

const Checkbox = (props: CheckboxTypes) => {
  const {title, description, price} = props
  return (
    <div className='flex border-black border-4 rounded-lg border-solid px-5 py-2 w-full justify-between items-center'>
      <input type='checkbox'/>
      <div className=''>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <p>{price}</p>
    </div>

  )
}

export default Checkbox
