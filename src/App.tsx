import First from "./pages/first"
import Second from "./pages/second"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
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
    <Card className="grid max-h-5 my-auto">
        {plan==1 ? <CTitle title="Personal Info"/> : plan==2 ? <CTitle title='Select your Plan' /> : <></>}
      <CardContent className='gap-4 grid'>
        {plan==1 ? <First onFormSubmit={handleFormSubmit}/> : plan==2 ? <Second /> :<></>}
      </CardContent>
    </Card>
  )
}

export default App
