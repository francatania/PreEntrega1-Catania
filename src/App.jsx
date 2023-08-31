
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
import { Checkout } from './components/Checkout'
import { ItemList } from './components/ItemList'
import { ItemListGender } from './components/ItemListGender'

function App() {


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenido"/>}/>
            <Route path='item/:id' element={<ItemDetailContainer/>}/>
            <Route path='category/:id' element={<ItemList/>}/>
            <Route path ='search/:busqueda' element={<Busqueda/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/todo' element={<ItemList/>}/>
            <Route path='/:genero' element={<ItemListGender/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>

      </CartProvider>
    </>
  )
}

export default App
