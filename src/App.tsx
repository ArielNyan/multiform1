import First from "./pages/first"
import Second from "./pages/second"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import sidebar from './assets/images/bg-sidebar-desktop.svg'
import CTitle from "./components/CTitle"
import { useState, useEffect } from "react"
function App() {
  const [form1, setForm1] = useState(null)
  const [plan, setPlan] = useState(2) 
  const handleFormSubmit = (data, plan) => {
    setForm1(data)
    setPlan(plan)
  }


  return (
    <Card className="grid grid-cols-[1fr_3fr] max-h-5 my-auto items-stretch rounded-md">
        <div id="sidebar" className='flex flex-col rounded-bl-md'>

        </div>
      <div>
        {plan==1 ? <CTitle title="Personal Info"/> : plan==2 ? <CTitle title='Select your Plan' /> : <></>}
      <CardContent className='gap-4 grid'>
        {plan==1 ? <First onFormSubmit={handleFormSubmit}/> : plan==2 ? <Second /> :<></>}
      </CardContent>
      </div>
    </Card>
  )
}

export default App
