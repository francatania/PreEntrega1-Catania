import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { FormularioPago } from "./FormularioPago"
import { Brief } from "./Brief"


export function Checkout(){

    const {carrito} = useContext(CartContext)

    const calcularTotal = () =>{
        return carrito.reduce((acc, item) => acc += item.cantidad * item.precio, 0)
    }
    

    return <div className="checkoutContainer">
        <div className="checkoutContainer__ruta">
            <h3><Link to={'/carrito'}>Carrito {'>>'}</Link> <span>Pago</span> </h3>
        </div>
        <div className="checkoutContainer__brief">
            <Brief/>
            <FormularioPago calcularTotal = {calcularTotal()}/>
        </div>
       
    </div>
}