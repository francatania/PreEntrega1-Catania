import { useState } from "react"
import { Item } from "./Item"
import { useEffect } from "react"
import data from '../datos/data.json'
import { pedirDatos } from "../datos/pedirDatos"


export const ItemList = () =>{
    const [prendas, setPrendas] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(()=>{
        setTimeout(()=>{
            pedirDatos().then((res) =>{
                setPrendas(res)
                setIsLoading(false)
            },1000)}, [])
    })


    return(<>
    {isLoading ? <div className="itemList">
        <h2>Cargando...</h2>
    </div>:
    <div className="itemList">
        {prendas.map((prenda) =>{
            return <Item key={prenda.id} img={prenda.img} img2={prenda.img2} nombre={prenda.nombre} precio={prenda.precio} id={prenda.id}/>
        })}
    </div>
    }
    </>)
}