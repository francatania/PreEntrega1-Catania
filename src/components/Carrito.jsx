import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export function Carrito(){
    const {carrito, setCarrito, eliminarDeCarrito} = useContext(CartContext)
    const [ agregado, setAgregado] = useState(false)


    const sumarCantidad = (producto) => {
        producto.cantidad += 1;
        setAgregado(!agregado); 
    }

    const restarCantidad = (producto) => {
        producto.cantidad > 1 ? producto.cantidad -= 1 : producto.cantidad = 1
        setAgregado(!agregado)
    }

    const calcularTotal = () =>{
        return carrito.reduce((acc, item) => acc += item.cantidad * item.precio, 0)
    }

    const scrollToNav = () =>{
        const navbar = document.getElementById('navbar')
        window.scrollTo({
            top: navbar.offsetTop,
            behavior: 'smooth'
        })
    }

    useEffect(()=>{
        scrollToNav()
    },[])


    return <div className="carritoMain">
                <div className="carritoMain__tituloCarrito">
                    <h2>Tu carrito</h2>
                </div>
                <div className="carritoMain__carritoContainer">
                    <div className="carritoMain__filasContainer">
                        { carrito.map((producto)=>{                        
                            return ( <div className="carritoMain__wrapper"key={producto.id}>
                                        <div className="carritoMain__itemDescripcion" >
                                            <img src={producto.img} alt="" className="carritoMain__imgItem" />
                                            <div className="carritoMain__nombreYCantidad">
                                                <h3 className="carritoMain__nombreProducto">{producto.nombre}</h3>
                                                <div className="carritoMain__contadores">
                                                    <button className="carritoMain__restar"onClick={() => restarCantidad(producto)} >-</button>
                                                    <p className="carritoMain__cantidad">{producto.cantidad}</p>
                                                    <button className="carritoMain__sumar" onClick={() => sumarCantidad(producto)} >+</button>
                                                </div>
                                            </div>
                                            <div className="carritoMain__eliminarYPrecio">
                                                <h3 className="carritoMain__eliminarDeCarrito" onClick={() => eliminarDeCarrito(producto)}><i className="fa-solid fa-trash"></i></h3>
                                                <h3 className="carritoMain__precio">$ {producto.precio * producto.cantidad}</h3>
                                            </div>
                                        </div>
                                        <div className="separador" key={producto.id}></div>
                                    </div>)
                        })}
                    </div>
                    <div className="accionesCarrito">
                        <div className="accionesCarrito__totales">TOTAL: $ {calcularTotal()}</div>
                        <Link to={'/checkout'}><div className="accionesCarrito__comprar"><button className="accionesCarrito__comprarBtn">Ir a Comprar</button></div></Link>
                    </div>

                </div>
             </div> 
}