import React from 'react'
import Checkbox from './Checkbox'


const Form3 = () => {
  return (
    <div className='w-full'>
      <div>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience</p>
      </div>

      <form>
        <Checkbox title='Online Services' description='Access to multiplayer games' price='+$1/mo'/>
      </form>
    </div>
  )
}

export default Form3
