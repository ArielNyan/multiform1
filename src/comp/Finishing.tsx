import { useEffect } from "react"



type dataProps = {
  form1: Object | null,
  form2: string | null,
  form3: Array<true|false>|null
}

const Finishing = (props: dataProps) => {

  const {form1, form2, form3} = props
  useEffect(()=>{
    console.log(form1)
    console.log(form2)
    console.log(form3)
  },[])

  return (
    <div>Finishing</div>
  )
}

export default Finishing
