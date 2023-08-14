import { useState } from 'react'
import './App.scss'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetail } from './components/ItemDetail'
import { ItemDetailContainer } from './components/ItemDetailContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido"/>}/>
          <Route path='item/:id' element={<ItemDetailContainer/>}/>
          <Route path='category/:id' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
