import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { pedirItemPorId } from "../datos/pedirDatos";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
export function ItemDetailContainer(){

        
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    // console.log(id)


    useEffect(()=>{
        const docRef = doc(db, "productos", id)
        getDoc(docRef)
            .then((resp) =>{
                setItem(
                    {...resp.data(), id: resp.id}
                )
                setIsLoading(false)
            })

        },[id])


    return <div>
        {item && <ItemDetail item={item} loading={isLoading}/>}
        </div>
}