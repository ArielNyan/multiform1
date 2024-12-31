import React from 'react'

const Card = ({children}) => {
  return (
    <div className='flex bg-white shadow-lg relative h-1/2 rounded-xl'>
      {children}
    </div>
  )
}

export default Card
