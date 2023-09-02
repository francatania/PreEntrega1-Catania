import { useContext, useState } from "react"
import { CartContext, CartProvider } from "../../context/CartContext"
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import { Link } from "react-router-dom"



export function FormularioPago({calcularTotal}){
    const {carrito, vaciarCarrito} = useContext(CartContext)
    const {register, handleSubmit, reset} = useForm()
    const [pedidoId, setPedidoId] = useState("")


    const enviar = (data) =>{
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal
        }

        const pedidoRef = collection(db, "pedidos")

        addDoc(pedidoRef, pedido)
            .then((doc) =>{
                setPedidoId(doc.id)
                vaciarCarrito()
            })
    }

    const borrarPedidoId = () =>{
        setPedidoId("")
    }

    if(pedidoId){
        return <div className="checkoutContainer__mensajeCompra">
            <h2><i className="fa-regular fa-circle-check checkoutContainer__check"></i></h2>
            <h2>¡Muchas gracias por tu compra!</h2>
            <h3>El id de tu pedido es: {pedidoId}</h3>
            <Link to={'/'}><button className="checkoutContainer__volverBtn" onClick={borrarPedidoId}>Volver</button></Link>
        </div>
    }

    return <form action="" className="checkoutContainer__formulario" onSubmit={handleSubmit(enviar)}>
            <div className="checkoutContainer__contacto">
                <h3>Datos de contacto</h3>
                <div className="checkoutContainer__nombres checkoutContainer__campos">
                    <input type="text" id="nombre" name="nombre" required placeholder="Nombre" {...register("nombre")}/>

                    <input type="text" id="apellido" name="apellido" placeholder="Apellido" required {...register("Apellido")}/>
                </div>
                <div className="checkoutContainer__datosContacto checkoutContainer__campos">
                    <input type="email" id="email" name="email" placeholder="Email" required {...register("Email")}/>

                    <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" required {...register("Telefono")}/>
                </div>
            </div>
            
            <div className="checkoutContainer__datosTarjeta">
                <h3>Datos tarjeta</h3>
                <div className="checkoutContainer__tarjeta checkoutContainer__campos">
                    <input type="text" id="tarjeta" name="tarjeta" placeholder="Número de Tarjeta" required {...register("Tarjeta")}/>

                    <input type="text" id="codigo" name="codigo" placeholder="Código seguridad"  required {...register("Codigo")}/>
                </div>
                <div className="checkoutContainer__fechaVencimientoYCuotas checkoutContainer__campos">
                    <div className="checkoutContainer__fechaVencimiento">
                        <div className="checkoutContainer__month">
                            <select id="vencimiento" name="vencimiento" required {...register("Mes vencimiento")}>
                                <option value="" disabled>MM</option>
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>
                                <option value="6">06</option>
                                <option value="7">07</option>
                                <option value="8">08</option>
                                <option value="9">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div className="checkoutContainer__year">
                            <select id="año" name="año" required {...register("Año vencimiento")}>
                                    <option value="" disabled>AAAA</option>
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
                        <select id="cuotas" name="cuotas" required {...register("Cuotas")}>
                            <option value="" disabled>Cuotas</option>
                            <option value="1">x1 ${calcularTotal}</option>
                            <option value="3">x3 ${(calcularTotal)/3}</option>
                            <option value="6">x6 ${(calcularTotal)/6}</option>
                        </select>
                    </div>

                </div>
            </div>
            <div className="checkoutContainer__comprar">
                <button type="submit">Comprar</button>
            </div>

            </form>
         
}