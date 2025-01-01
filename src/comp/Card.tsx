import React from 'react'

const Card = ({children}) => {
  return (
    <div className='flex bg-white shadow-lg relative h-1/2 rounded-xl w-2/3'>
      {children}
    </div>
  )
}

export default Card
