import { useParams} from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { Item } from "./Item"
import { CartContext } from "../context/CartContext"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase"
import ClipLoader from "react-spinners/ClipLoader";

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
                setTimeout(()=>{
                    setIsLoading(false)
                },400)
            })
    },[genero])


    const override = {
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",     
        height: "100vh",          
    };



    return (<>
    {isLoading ? <div className="itemList itemList__loading">
        <h3>Cargando</h3>
        <ClipLoader
        color={'#3e2f5b'}
        loading={isLoading}
        css={override}
        size={30}
      />
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