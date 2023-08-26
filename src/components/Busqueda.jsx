import { useContext, useDebugValue, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useParams } from "react-router-dom"
import { Item } from "./Item"
import { collection, getDocs} from "firebase/firestore"
import { db } from "../firebase/firebase"


export function Busqueda(){
    const {carrito, agregar1AlCarrito} = useContext(CartContext)
    const [prendas, setPrendas] = useState([])
    const busqueda = useParams()
    const productosRef = collection(db, "productos")

    useEffect(()=>{
        
        getDocs(productosRef)
        .then((resp)=>{
            setPrendas(
                resp.docs.map((prod)=>{
                    return {...prod.data(), id: prod.id}
                })
            )
        })
    }, [busqueda])



    const resultado = prendas.filter(producto=> producto.nombre.toLowerCase().includes(busqueda.busqueda))
    
    return <>
        <div className="itemList">
            <div className="itemList__tituloBusquedaContainer">
                <h2>Resultado de búsqueda</h2>
            </div>
            {resultado.map((prenda) =>{
                return <Item key={prenda.id} img={prenda.img} img2={prenda.img2} nombre={prenda.nombre} precio={prenda.precio} id={prenda.id} agregar ={()=> agregar1AlCarrito(prenda, 1)} />
            })}
        </div>
    </>
}