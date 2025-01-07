import Card from "./comp/Card"
import Sidebar from "./comp/Sidebar"
import Form from "./comp/Form"
import { useState } from "react"
import Form2 from "./comp/form2"

function App() {
  const [form1Data, setForm1Data] = useState()
  const [active, setActive] = useState(2)
  const handleFormSubmit = (formData) => {
    if(active===1){
      setForm1Data(formData)
      setActive(2)
    }
  }

  const cardOptions = [
    { id: "1", title: "Cartão 1", description: "Descrição do Cartão 1" },
    { id: "2", title: "Cartão 2", description: "Descrição do Cartão 2" },
    { id: "3", title: "Cartão 3", description: "Descrição do Cartão 3" },
  ];

  const handleForm2Submit = (selectedId: string) => {
    console.log("Cartão selecionado:", selectedId);
    alert(`Você selecionou o cartão com ID: ${selectedId}`);
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <Card>
        <Sidebar />
        {active===1 ? 
          <Form onSubmit={handleFormSubmit}/>
        : active===2 ?
          <Form2 options={cardOptions} onSubmit={handleForm2Submit}/>
        : <></>
        }
      </Card>
    </div>
  )
}

export default App
