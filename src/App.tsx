import Card from "./comp/Card"
import Sidebar from "./comp/Sidebar"
import Form from "./comp/Form"
import { useState } from "react"
function App() {
  const [form1Data, setForm1Data] = useState()
  const [active, setActive] = useState(1)
  const handleFormSubmit = (formData) => {
    if(active===1){
      setForm1Data(formData)
      setActive(2)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <Card>
        <Sidebar />
        {active===1 ? 
          <Form onSubmit={handleFormSubmit}/>
        : active===2 ?
          <></>
        : <></>
        }
      </Card>
    </div>
  )
}

export default App
