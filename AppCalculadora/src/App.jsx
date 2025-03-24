import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Calculadora from './components/Calculadora.jsx'
import Todo from './components/Todo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola</h1>

      <Todo/>

      <Calculadora/>


    </>
  )
}

export default App
