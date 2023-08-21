import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartWidget = () =>{
    const {agregarNumeroCarrito} = useContext(CartContext)

    return <div className="nav__carritoContainer">
                <a href="" className="nav__carritoLink"><i className="fa-solid fa-cart-shopping"></i> {agregarNumeroCarrito()}</a>
            </div>
}