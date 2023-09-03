import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Item } from "./Item"
import { useEffect } from "react"
import data from '../datos/data.json'
import { pedirDatosCategoria } from "../datos/pedirDatos"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase"


export const ItemList = () =>{

    const {carrito, agregar1AlCarrito} = useContext(CartContext)
    const [prendas, setPrendas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const categoria = useParams()
    
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

    useEffect(()=>{
        
        const productosRef = collection(db, "productos")
        const q = categoria.id === undefined ? productosRef : query(productosRef, where("categoria", "==", categoria.id))


        getDocs(q)
            .then((resp) =>{
                setPrendas(
                    resp.docs.map((prod) =>{
                        return {...prod.data(), id: prod.id}
                    })
                )
                setIsLoading(false)
            })
    },[categoria])

    return(<>
    {isLoading ? <div className="itemList itemList__loading">
        <h2>Cargando...</h2>
    </div>:
    <div className="itemListContainer">
            <div className="itemList">
        {prendas.map((prenda) =>{
            return <Item key={prenda.id} img={prenda.img} img2={prenda.img2} nombre={prenda.nombre} precio={prenda.precio} id={prenda.id} agregar ={()=> agregar1AlCarrito(prenda, 1) } />
        })}
        </div>
    </div>

    }
    </>)
}