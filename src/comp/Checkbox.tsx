
type CheckboxTypes = {
  title: string,
  description: string,
  price: string,
  className?: string
}

const Checkbox = (props: CheckboxTypes) => {
  const {title, description, price, className} = props
  return (
    <div className={`flex border-black border-4 rounded-lg border-solid px-5 py-2 w-full justify-between items-center ${className}`}>
      <input type='checkbox'className="w-6 h-6 rounded-xl"/>
      <div className=''>
        <h1 className="font-bold text-md">{title}</h1>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <p className="text-gray-700">{price}</p>
    </div>

  )
}

export default Checkbox
