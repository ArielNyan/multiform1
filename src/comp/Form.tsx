import React, { useState } from 'react'
import FormInput from './FormInput'
import '../App.css'
const Form = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
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
    <div className='px-10 w-full py-4 flex flex-col '>
      <h2 className='text-xl font-bold'>Personal Info</h2>
      <form className='justify-between flex flex-col h-full mb-10' onSubmit={handleSubmit}>
        <div>
        <div className='flex flex-col'>
          <label className='py-2' htmlFor='name'>Name</label>
          <FormInput name='name' type='text' id='name' onChange={handleChange} className='border-2 border-black rounded-lg disabled:border-black w-full p-2' placeholder='Your Name' required/>
        </div>
        <div className='flex flex-col '>
          <label htmlFor='email' className='py-2'>Email</label>
          <FormInput name='email' id='email' onChange={handleChange} type='email' className='border-2 rounded-lg border-black w-full p-2' placeholder='my.email@mail.com' required/>
        </div>
        <div className='flex flex-col '>
          <label htmlFor='phone' className='py-2'>Phone Number</label>
          <FormInput name='phone' id='phone' onChange={handleChange} type='number' className='border-2 rounded-lg border-black w-full p-2' placeholder='(00) 90000-0000' required/>
        </div>
        </div>
        <div>
        <div className='mt-5 w-full flex items-end h-min'>
          <div className='shad rounded-2xl ml-auto'>
          <button type='submit' className='transition ease-in-out delay-100 ml-auto p-3 bg-blue-800 rounded-2xl hover:bg-purple-800 shad'>
            <span className='text-white font-semibold'>Next Step</span>
          </button>
        </div>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Form
