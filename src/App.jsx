import { useState } from 'react'
import './App.scss'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenido"/>
    </>
  )
}

export default App
