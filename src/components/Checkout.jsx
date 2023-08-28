import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"


export function Checkout(){

    const {carrito} = useContext(CartContext)

    const calcularTotal = () =>{
        return carrito.reduce((acc, item) => acc += item.cantidad * item.precio, 0)
    }

    return <div className="checkoutContainer">
        <div className="checkoutContainer__ruta">
            <h3><Link to={'/carrito'}><a href="">Carrito {'>'}</a></Link> <span>Pago</span> </h3>
        </div>
        <div className="checkoutContainer__formularioContainer">
            <div className="checkoutContainer__carritoFormulario">
                <div className="carritoMain__filasContainer checkoutContainer__filasContainer">
                        { carrito.map((producto)=>{                        
                            return ( <div className="carritoMain__wrapper">
                                        <div className="carritoMain__itemDescripcion" key={producto.id}>
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
                    <div className="accionesCarrito">
                        <div className="accionesCarrito__totales">TOTAL: $ {calcularTotal()}</div>
                    </div>   
            </div>
            <form action="" className="checkoutContainer__formulario">
                <div className="checkoutContainer__contacto">
                    <h3>Datos de contacto</h3>
                    <div className="checkoutContainer__nombres checkoutContainer__campos">
                        <input type="text" id="nombre" name="nombre" required placeholder="Nombre"/>

                        <input type="text" id="apellido" name="apellido" placeholder="Apellido" required/>
                    </div>
                    <div className="checkoutContainer__datosContacto checkoutContainer__campos">
                        <input type="email" id="email" name="email" placeholder="Email" required/>

                        <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" required/>
                    </div>
                </div>
                
                <div className="checkoutContainer__datosTarjeta">
                    <h3>Datos tarjeta</h3>
                    <div className="checkoutContainer__tarjeta checkoutContainer__campos">
                        <input type="text" id="tarjeta" name="tarjeta" placeholder="Número de Tarjeta" required/>

                        <input type="text" id="codigo" name="codigo" placeholder="Código seguridad" required/>
                    </div>
                    <div className="checkoutContainer__fechaVencimientoYCuotas checkoutContainer__campos">
                        <div className="checkoutContainer__fechaVencimiento">
                            <div className="checkoutContainer__month">
                                <select id="vencimiento" name="vencimiento" required>
                                    <option value="" disabled selected>MM</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div className="checkoutContainer__year">
                                <select id="año" name="año" required>
                                        <option value="" disabled selected>AA</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                        <option value="2031">2031</option>
                                        <option value="2032">2032</option>
                                        <option value="2033">2033</option>
                                </select>
                            </div>
                        </div>

                        <div className="checkoutContainer__cuotas">
                            <select id="cuotas" name="cuotas" required>
                                <option value="" disabled selected>Cuotas</option>
                                <option value="1">x1 ${calcularTotal()}</option>
                                <option value="3">x3 ${(calcularTotal())/3}</option>
                                <option value="6">x6 ${(calcularTotal())/6}</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className="checkoutContainer__comprar">
                    <button type="submit">Comprar</button>
                </div>

                </form>
        </div>
    </div>
}