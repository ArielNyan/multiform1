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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            onChange={handleChange}
            name='name'
          />
        </div>
        <FormInput name='email' id='email' onChange={handleChange} />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Form
