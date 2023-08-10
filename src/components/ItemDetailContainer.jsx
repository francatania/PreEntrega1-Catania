import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { pedirDatos, pedirItemPorId } from "../datos/pedirDatos";

export function ItemDetailContainer({itemId}){

        
    const [item, setItem] = useState([])

    useEffect(()=>{
        pedirItemPorId(itemId)
            .then((res)=>{
                setItem(res)
            })
        },[])


    return <div>
        {item && <ItemDetail item={item}/>}
        </div>
}