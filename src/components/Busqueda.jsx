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
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        
        getDocs(productosRef)
        .then((resp)=>{
            setPrendas(
                resp.docs.map((prod)=>{
                    return {...prod.data(), id: prod.id}
                })
            )
            setIsLoading(false)
        })
    }, [])

    const resultado = prendas.filter(producto=> producto.nombre.toLowerCase().includes(busqueda.busqueda))
    
    return <>
        <div className="itemListSearch">
            <div className="itemListSearch__tituloBusquedaContainer">
                <h2>Resultado de búsqueda</h2>
            </div>
            {isLoading ? <div className="itemListSearch__loading">
                <h3>Cargando...</h3>
            </div> 
            :resultado.length > 0 ? <div className="itemList">
                                                {resultado.map((prenda) =>{
                                                    return <Item key={prenda.id} img={prenda.img} img2={prenda.img2} nombre={prenda.nombre} precio={prenda.precio} id={prenda.id} agregar ={()=> agregar1AlCarrito(prenda, 1)} />
                                                })}
                                    </div>
                                    : 
                                    <div className="itemListSearch__notFoundContainer">
                                        <h3>No se encontraron productos para "{busqueda.busqueda}"</h3>
                                    </div>
                                    }
                    
            

        </div>
    </>
}