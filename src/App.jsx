import { useState } from 'react'
import './App.scss'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetail } from './components/ItemDetail'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { CartContext } from './context/CartContext'
import { Carrito } from './components/Carrito'

function App() {
  const [carrito, setCarrito] = useState([])

  const agregar1AlCarrito = (item, cantidad) =>{
    const itemAgregado = {...item, cantidad}
    const estaAgregado = carrito.find(prenda => prenda.id === itemAgregado.id)

    estaAgregado ? (estaAgregado.cantidad += 1 , setCarrito([...carrito])) : setCarrito([...carrito, itemAgregado])
  
  }

  const agregarAlCarrito = (item, cantidad) =>{
    const nuevoCarrito = [...carrito]
    const itemAgregado = {...item, cantidad}
    const estaEnCarrito = nuevoCarrito.find(producto => producto.id === itemAgregado.id)

    if(estaEnCarrito){
        estaEnCarrito.cantidad += cantidad
        setCarrito([...nuevoCarrito])
    }
    else {
        setCarrito([...carrito, itemAgregado])
    }   
    
  }
  
  const eliminarDeCarrito = (item) =>{
    const index = carrito.findIndex(prenda => prenda.id === item.id)
    const nuevoCarrito = [...carrito]
    nuevoCarrito[index].cantidad > 1 ? nuevoCarrito[index].cantidad -= 1 : nuevoCarrito.splice(index, 1)
    setCarrito([...nuevoCarrito])
  }

  const agregarNumeroCarrito = () =>{
    return carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
  }


  return (
    <>
      <CartContext.Provider value={{carrito, setCarrito, agregarAlCarrito, agregarNumeroCarrito, agregar1AlCarrito, eliminarDeCarrito}}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenido"/>}/>
            <Route path='item/:id' element={<ItemDetailContainer/>}/>
            <Route path='category/:id' element={<ItemListContainer/>}/>
            <Route path='/checkout' element={<Carrito/>}/>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>

    </>
  )
}

export default App
