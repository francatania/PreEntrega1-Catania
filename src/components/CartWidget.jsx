import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartWidget = ({clicked}) =>{
    const {agregarNumeroCarrito} = useContext(CartContext)

    return <div className={`nav__carritoContainer`}>
                <i className="fa-solid fa-cart-shopping nav__carritoLink"></i> {agregarNumeroCarrito()}
            </div>
}