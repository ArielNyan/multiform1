import React from 'react'

type props = {
  name: string,
  id: string,
  onChange: any
}

const FormInput = (props: props) => {
  const {name, id, onChange} = props

  return (
    <div>
      <label htmlFor={name}>{name}
      </label>
      <input
        type='text'
        id={id}
        onChange={(e)=>onChange(e)}
        name={name}
      />
    </div>
  )
}

export default FormInput
