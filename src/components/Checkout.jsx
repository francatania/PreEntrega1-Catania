import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { FormularioPago } from "./FormularioPago"


export function Checkout(){

    const {carrito} = useContext(CartContext)
    const [carritoVacio, setCarritoVacio] = useState(false)

    const calcularTotal = () =>{
        return carrito.reduce((acc, item) => acc += item.cantidad * item.precio, 0)
    }

    const carritoEstaVacio = () =>{
        carrito.length === 0 && setCarritoVacio(true)
    }

    useEffect(()=>{
        carritoEstaVacio()
    }, [carrito])

    return <div className="checkoutContainer">
        <div className="checkoutContainer__ruta">
            <h3><Link to={'/carrito'}><a href="">Carrito {'>>'}</a></Link> <span>Pago</span> </h3>
        </div>
        <div className="checkoutContainer__formularioContainer">
            <div  className={ carritoVacio ? "checkoutContainer__vacio" : "checkoutContainer__carritoFormulario"  } >
                <div className="carritoMain__filasContainer checkoutContainer__filasContainer">
                        { carrito.map((producto)=>{                        
                            return ( <div className="carritoMain__wrapper" key={producto.id}>
                                        <div className="carritoMain__itemDescripcion" >
                                            <img src={producto.img} alt="" className="carritoMain__imgItem" />
                                            <div className="carritoMain__nombreYCantidad">
                                                <h3 className="carritoMain__nombreProducto">{producto.nombre} x {producto.cantidad}</h3>

                                            </div>
                                            <div className="carritoMain__eliminarYPrecio">
                                                <h3 className="carritoMain__precio">$ {producto.precio * producto.cantidad}</h3>
                                            </div>
                                        </div>
                                        <div className="separador"></div>
                                    </div>)
                        })}
                    </div>
                    <div className={ carritoVacio ? "accionesCarrito__vacio" : "accionesCarrito"  }>
                        <div className="accionesCarrito__totales">TOTAL: $ {calcularTotal()}</div>
                    </div>   
            </div>
            <FormularioPago calcularTotal = {calcularTotal()}/>
        </div>
       
    </div>
}