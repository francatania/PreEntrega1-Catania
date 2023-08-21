import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"

export function ItemCountCart (producto){

    const {carrito} = useContext(CartContext)
    const [cantidadItem, setCantidadItem] = useState(producto.producto.cantidad)


    console.log(producto)
    return  <div className="carritoMain__contadores">
                <button className="carritoMain__restar"onClick={() => restarCantidad(producto)} >-</button>
                <p className="carritoMain__cantidad">{producto.cantidad}</p>
                <button className="carritoMain__sumar" onClick={() => sumarCantidad(producto)} >+</button>
            </div>}