import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Item } from "./Item"
import { useEffect } from "react"
import data from '../datos/data.json'
import { pedirDatos, pedirDatosCategoria } from "../datos/pedirDatos"
import { useParams } from "react-router-dom"


export const ItemList = () =>{

    const {carrito, agregar1AlCarrito} = useContext(CartContext)
    const [prendas, setPrendas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const categoria = useParams()
    // console.log(categoria, "categoria")


    useEffect(()=>{
            setTimeout(()=>{
                pedirDatosCategoria(categoria.id).then((res) =>{
                    setPrendas(res)
                    setIsLoading(false)
                })},1000)
                }, [categoria])


    return(<>
    {isLoading ? <div className="itemList itemList__loading">
        <h2>Cargando...</h2>
    </div>:
    <div className="itemList">
        {prendas.map((prenda) =>{
            return <Item key={prenda.id} img={prenda.img} img2={prenda.img2} nombre={prenda.nombre} precio={prenda.precio} id={prenda.id} agregar ={()=> agregar1AlCarrito(prenda, 1)} />
        })}
    </div>
    }
    </>)
}