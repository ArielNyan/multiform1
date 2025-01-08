import Card from "./comp/Card"
import Sidebar from "./comp/Sidebar"
import Form from "./comp/Form"
import { useEffect, useState } from "react"
import Form2 from "./comp/form2"
import Form3 from "./comp/Form3"


import advanced from './assets/images/icon-advanced.svg'
import arcade from './assets/images/icon-arcade.svg'
import pro from './assets/images/icon-pro.svg'

type form1type = {
  name: string,
  email: string,
  phone: string
}




function App() {
  const [form1Data, setForm1Data] = useState<form1type | null>(null)
  const [form2Data, setForm2Data] = useState<string | null>(null)
  const [active, setActive] = useState(3)
  const handleFormSubmit = (formData: any) => {
    if (active === 1) {
      setForm1Data(formData)
      setActive(2)
    }
  }

  const cardOptions = [
    { id: "1", title: "Arcade", price: "$9/mo", img: arcade },
    { id: "2", title: "Advanced", price: "$12/mo", img: advanced },
    { id: "3", title: "Pro", price: "$15/mo", img: pro },
  ];

  const handleForm2Submit = (selectedId: string) => {
    setForm2Data(selectedId)
    setActive(3)
  };
  const handleReset = () => {
    if (active === 2) setForm2Data(null)
    if (active === 3) return
    setActive(curr => curr - 1)
  }
  useEffect(() => {
    console.log(form1Data)
  }, [form1Data])
  useEffect(() => {
    console.log(form2Data)
  }, [form2Data])


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <Card>
        <Sidebar />
        {active === 1 ?
          <Form onSubmit={handleFormSubmit} />
          : active === 2 ?
            <Form2 options={cardOptions} onSubmit={handleForm2Submit} onReset={handleReset} />
            : active === 3 ?
              <Form3 />
              : <></>
        }
      </Card>
    </div>
  )
}

export default App
