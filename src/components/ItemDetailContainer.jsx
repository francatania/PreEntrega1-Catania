import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { pedirDatos, pedirItemPorId } from "../datos/pedirDatos";
import { useParams } from "react-router-dom";

export function ItemDetailContainer(){

        
    const [item, setItem] = useState([])
    const id = useParams().id
    console.log(id)


    useEffect(()=>{
        pedirItemPorId(Number(id))
            .then((res)=>{
                setItem(res)
            })
        },[])


    return <div>
        {item && <ItemDetail item={item}/>}
        </div>
}