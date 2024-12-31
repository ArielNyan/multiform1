import Card from "./comp/Card"
import Sidebar from "./comp/Sidebar"
import Form from "./comp/Form"
function App() {

  const handleFormSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <Card>
        <Sidebar />
        <Form onSubmit={handleFormSubmit}/>
      </Card>
    </div>
  )
}

export default App
