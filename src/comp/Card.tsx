import React from 'react'

const Card = ({children}) => {
  return (
    <div className='flex bg-white rounded shadow-lg relative h-1/2'>
      {children}
    </div>
  )
}

export default Card
