
import './App.scss'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetail } from './components/ItemDetail'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { CartContext, CartProvider } from './context/CartContext'
import { Carrito } from './components/Carrito'
import { Footer } from './components/Footer'
import { Busqueda } from './components/Busqueda'

function App() {


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenido"/>}/>
            <Route path='item/:id' element={<ItemDetailContainer/>}/>
            <Route path='category/:id' element={<ItemListContainer/>}/>
            <Route path ='search/:busqueda' element={<Busqueda/>}/>
            <Route path='/checkout' element={<Carrito/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>

      </CartProvider>
    </>
  )
}

export default App
