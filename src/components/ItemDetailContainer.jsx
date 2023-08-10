import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { pedirDatos, pedirItemPorId } from "../datos/pedirDatos";
import { useParams } from "react-router-dom";

export function ItemDetailContainer(){

        
    const [item, setItem] = useState({})
    const {id} = useParams()
    console.log(id)


    useEffect(()=>{
        pedirItemPorId(id)
            .then((res)=>{
                setItem(res)
            })
            .catch((error) => {
                console.error(error.error);
            });
        },[id])


    return <div>
        {item && <ItemDetail item={item}/>}
        </div>
}