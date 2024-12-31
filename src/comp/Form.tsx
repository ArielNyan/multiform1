import React, { useState } from 'react'
import FormInput from './FormInput'

const Form = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const handleChange = (e: any) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className='px-10 py-4 flex flex-col '>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center justify-center'>
          <label htmlFor='name'>Name</label>
          <FormInput name='name' type='text' id='name' onChange={handleChange} className='border-2 border-black rounded disabled:border-black invalid:border-red-900' required/>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <label htmlFor='email' className='mt-2 mb-1'>Email</label>
          <FormInput name='email' id='email' onChange={handleChange} type='email' className='border-2 rounded border-black' required/>
        </div>
        <div className='mt-5 w-full flex items-end '>
          <button type='submit' className='ml-auto'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Form
