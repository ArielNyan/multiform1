import React from 'react'

type props = {
  name: string,
  id: string,
  onChange: any,
  type: string
}

const FormInput = ({className, type, ...props}) => {
  // const {name, id, onChange, type} = props

  return (
    <div>
      <input
        className={className}
        type={type}
        {...props}
        // type={type}
        // id={id}
        // onChange={(e)=>onChange(e)}
        // name={name}
      />
    </div>
  )
}

export default FormInput
