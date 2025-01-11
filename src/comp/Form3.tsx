import React, { useState } from 'react'
import Checkbox from './Checkbox'

type props = {
  handleSubmit: (seleted: Array<false | true>) => void,
  handleReset: () => void
}

const Form3 = (props: props) => {
  const { handleSubmit, handleReset } = props


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
  const list: Array<false | true> = [false, false, false]
  const check = (id: number) => {
    list[id] = list[id] === false ? true : false
    console.log(list)
  }
  const submit = (e: any) => {
    e.preventDefault()
    handleSubmit(list)
  }
  const reset = (e: any) => {
    e.preventDefault()
    handleReset()
  }

  return (
    <div className='w-full m-10'>
      <div>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience</p>
      </div>

      <form onSubmit={(e) => submit(e)} onReset={(e) => reset(e)}>
        {
          addons.map((addon, index) => (
            <Checkbox key={index} title={addon.title} check={check} id={index} description={addon.description} price={addon.price} className='my-5' />
          ))
        }
        {/* <Checkbox title='Online Services' description='Access to multiplayer games' price='+$1/mo'/> */}
        <div className='flex justify-between'>
          <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" type='reset'>Back</button>
          <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" type='submit'>Send</button>
        </div>

      </form>
    </div>
  )
}

export default Form3
