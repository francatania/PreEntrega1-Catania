import { useContext, useDebugValue, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useParams } from "react-router-dom"
import { Item } from "./Item"
import { collection, getDocs} from "firebase/firestore"
import { db } from "../firebase/firebase"
import ClipLoader from "react-spinners/ClipLoader";


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
            setTimeout(()=>{
                setIsLoading(false)
            },400)
        })
    }, [])

    const override = {
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",     
        height: "100vh",          
    };

    const resultado = prendas.filter(producto=> producto.nombre.toLowerCase().includes(busqueda.busqueda))
    
    return <>
        {isLoading ?
            
                <div className="itemList itemList__itemList-search">
                    <div className="itemList itemList__loading">
                    <h3>Cargando</h3>
                        <ClipLoader
                            color={'#3e2f5b'}
                            loading={isLoading}
                            css={override}
                            size={30}
                        />
                    </div>
                </div> 
            
            :

           <div className="itemListSearch">
           <div className="itemListSearch__tituloBusquedaContainer">
               <h2>Resultado de búsqueda</h2>
           </div>
 
           {resultado.length > 0 ? <div className="itemList">
                                               {resultado.map((prenda) =>{
                                                   return <Item key={prenda.id} img={prenda.img} img2={prenda.img2} nombre={prenda.nombre} precio={prenda.precio} id={prenda.id} agregar ={()=> agregar1AlCarrito(prenda, 1)} />
                                               })}
                                   </div>
                                   : 
                                   <div className="itemListSearch__notFoundContainer">
                                       <h3>No se encontraron productos para </h3>
                                       <h3>"{busqueda.busqueda}"</h3>
                                   </div>}
                                   
                   
           

       </div>
           }

        
    </>
}