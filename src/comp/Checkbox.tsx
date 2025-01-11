import { useState } from "react"

type CheckboxTypes = {
  title: string,
  description: string,
  price: string,
  check: (id: number) => void,
  className?: string,
  id: number
}

const Checkbox = (props: CheckboxTypes) => {
  const {title, description, price, check, className, id} = props

  const [isChecked, setIsChecked] = useState(false)
  const handleCheck = () => {
    setIsChecked(!isChecked)
    check(id)
  }


  return (
    <label htmlFor="checkbox" className={`flex border-black border-4 rounded-lg border-solid px-5 py-2 w-full justify-between items-center ${className}`} onClick={handleCheck}>
      <input checked={isChecked} onChange={handleCheck} type='checkbox'className="w-6 h-6 rounded-xl" name="checkbox"/>
      <div className=''>
        <h1 className="font-bold text-md">{title}</h1>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <p className="text-gray-700">{price}</p>
    </label>

  )
}

export default Checkbox
