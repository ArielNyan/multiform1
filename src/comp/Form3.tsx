import React from 'react'
import Checkbox from './Checkbox'


const Form3 = () => {
  const addons = [
    {
      title: 'Online Services',
      description: 'Access to multiplayer games',
      price: '+$1/mo',
    },
    {
      title: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2/mo',
    },
    {
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: '+$2/mo',
    },
  ]



  return (
    <div className='w-full m-10'>
      <div>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience</p>
      </div>

      <form>
        {
          addons.map((addon) => (
            <Checkbox title={addon.title} description={addon.description} price={addon.price} className='my-5'/>
          ))
        }
        {/* <Checkbox title='Online Services' description='Access to multiplayer games' price='+$1/mo'/> */}
      </form>
    </div>
  )
}

export default Form3
