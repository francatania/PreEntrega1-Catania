import { useParams} from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { Item } from "./Item"
import { CartContext } from "../context/CartContext"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase"

export function ItemListGender(){
    const {carrito, agregar1AlCarrito} = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(true)
    const [prendas, setPrendas] = useState([])
    const genero = useParams()
    
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
        const q = query(productosRef, where("genero", "==", genero.genero))


        getDocs(q)
            .then((resp) =>{
                setPrendas(
                    resp.docs.map((prod) =>{
                        return {...prod.data(), id: prod.id}
                    })
                )
                setIsLoading(false)
            })
    },[genero])


    return (<>
    {isLoading ? <div className="itemList itemList__loading">
        <h2>Cargando...</h2>
    </div>:
    <div className="itemListContainer">
            <div className="itemList">
        {prendas.map((prenda) =>{
            return <Item key={prenda.id} img={prenda.img} img2={prenda.img2} nombre={prenda.nombre} precio={prenda.precio} id={prenda.id} agregar ={()=> agregar1AlCarrito(prenda, 1)} />
        })}
        </div>
    </div>

    }
    </>)

    
}