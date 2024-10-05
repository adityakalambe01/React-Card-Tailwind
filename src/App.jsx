
import './App.css'
import Card from './components/Card'
import NewCard from './components/NewCard'

function App() {

  // let myObj = {
  //   name : "Aditya Kalambe",
  //   age : 21
  // }

  // let newArray = [1,2,3,4,5];
  return (
    <>
      <h1 className='bg-green-300 text-red-400 p-4 rounded-xl mb-4'>Tailwind Test</h1>
      
      <div className="flex bg-red-400 p-4">
        <Card username="Alexa" btnText="Click Me" className="m"/>
        <NewCard username="Riya" btnText="Visit Me"/>
      </div>
    </>
  )
}

export default App
