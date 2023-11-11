import { useContext, useState } from "react"
import { CartContext, CartProvider } from "../../context/CartContext"
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ClipLoader from "react-spinners/ClipLoader";




export function FormularioPago({calcularTotal}){
    const {carrito, vaciarCarrito} = useContext(CartContext)
    const {register, handleSubmit, reset} = useForm()
    const [pedidoId, setPedidoId] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    
    const override = {
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",     
        height: "100vh",          
    };

    const enviar = (data) =>{
        setIsLoading(true);

        setTimeout(()=>{
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
                    setIsLoading(false);
                })
        }, 1200)

    }

    const borrarPedidoId = () =>{
        setPedidoId("")
    }


    const showSwal = () => {
        const MySwal = withReactContent(Swal);
        const pedidoIdValue = pedidoId;
        MySwal.fire({
          title: '¡Muchas gracias por tu compra!',
          text: `El id de tu pedido es: ${pedidoIdValue}`,
          icon: "success"
        }).then(()=>{
            borrarPedidoId();
            window.location.href = '/';
        });
      };

    if(pedidoId){
        showSwal();
        return <div className="checkoutContainer__mensajeCompra">
                    {/* <h2><i className="fa-regular fa-circle-check checkoutContainer__check"></i></h2>
                    <h2>¡Muchas gracias por tu compra!</h2>
                    <h3>El id de tu pedido es: {pedidoId}</h3> */}
                    {/* <Link to={'/'}><button className="checkoutContainer__volverBtn" onClick={borrarPedidoId}>Volver</button></Link> */}
                </div>
    }

    return (
        <>
    {isLoading ? <div className="itemList itemList__loading">
    <h3>Cargando</h3>
    <ClipLoader
        color={'#3e2f5b'}
        loading={isLoading}
        css={override}
        size={30}
      />
    </div>:
    <form action="" className="checkoutContainer__formulario" onSubmit={handleSubmit(enviar)}>
            <div className="checkoutContainer__contacto">
                <h3>Datos de contacto</h3>
                <div className="checkoutContainer__nombres checkoutContainer__campos">
                    
                    <input type="text" id="nombre" name="nombre" required placeholder="Nombre" {...register("nombre")}/>

                    <input type="text" id="apellido" name="apellido" placeholder="Apellido" required {...register("Apellido")}/>
                </div>
                <div className="checkoutContainer__datosContacto checkoutContainer__campos">
                    <input type="email" id="email" name="email" placeholder="Email" required value="ejemplo@hotmail.com" {...register("Email")}/>

                    <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" required value={4512321} {...register("Telefono")}/>
                </div>
            </div>
            
            <div className="checkoutContainer__datosTarjeta">
                <h3>Datos tarjeta</h3>
                <div className="checkoutContainer__tarjeta checkoutContainer__campos">
                    <input type="text" id="tarjeta" name="tarjeta" placeholder="Número de Tarjeta" required value={111122223333} {...register("Tarjeta")}/>

                    <input type="text" id="codigo" name="codigo" placeholder="Código seguridad"  required value={123} {...register("Codigo")}/>
                </div>
                <div className="checkoutContainer__fechaVencimientoYCuotas checkoutContainer__campos">
                    <div className="checkoutContainer__fechaVencimiento">
                        <div className="checkoutContainer__month">
                            <select id="vencimiento" name="vencimiento" required {...register("Mes vencimiento")}>
                                <option value="" disabled selected>MM</option>
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
                                    <option value="" disabled selected>AAAA</option>
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
                            <option value="" disabled selected>Cuotas</option>
                            <option value="1">x1 ${calcularTotal.toFixed(2)}</option>
                            <option value="3">x3 ${((calcularTotal)/3).toFixed(2)}</option>
                            <option value="6">x6 ${((calcularTotal)/6).toFixed(2)}</option>
                        </select>
                    </div>

                </div>
            </div>
            <div className="checkoutContainer__comprar">
                <button type="submit">Comprar</button>
            </div>

            </form>}
            </>)
         
}