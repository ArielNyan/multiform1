import { useEffect } from "react"



type dataProps = {
  form1: Object | null,
  form2: string | null,
  form3: Array<true | false> | null
}


const Finishing = (props: dataProps) => {

  const { form1, form2, form3 } = props
  let addons: Object[] = []

  // useEffect(()=>{
  //   console.log(form1)
  //   console.log(form2)
  //   console.log(form3)
  // },[])

  let plan: Object = {}
  switch (form2) {
    case '1':
      plan = {name: 'Arcade', price: 9}
      break

    case '2':
      plan = {name: 'Advanced', price: 12}
      break

    case '3':
      plan = {name: 'Pro', price: 15}
      break
    default:
      console.log('da fuq')
  }

  if (form3) {
    form3.map((options, i) => {
      if (options) {
        switch (i) {
          case 0:
            addons.push({ name: 'Online service', price: '+$1/mo', Sprice: 1 })
            break
          case 1:
            addons.push({ name: 'Larger storage', price: '+$2/mo', Sprice: 2 })
            break
          case 2: 
            addons.push({name: 'Customizable profile', price: '+$2/mo', Sprice: 2})
        }
      }
    })
  }
  useEffect(()=>{
    console.log(addons)
    console.log(plan)
  }, [])

  return (
    <div>Finishing</div>
  )
}

export default Finishing
