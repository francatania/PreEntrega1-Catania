import { useContext, useEffect, useState } from "react"
import { ItemCount } from "../components/ItemCount" 
import { CartContext } from "../context/CartContext"

export function ItemDetail({item}){

    const {carrito, agregarAlCarrito} = useContext(CartContext)
    console.log(carrito)
    const [imgDetail, setImgDetal] = useState("")
    const seleccionImg = (e) =>{
        console.log(e)
        setImgDetal(e.target.currentSrc)
    }
    useEffect(()=>{
        setImgDetal(item.img)
    }, [item])

    const [cantidad, setCantidad] = useState(1)

    const handleSumar = () =>{
        setCantidad(cantidad+1)
    }

    const handleRestar = () =>{
        cantidad > 1 ? setCantidad(cantidad-1) : setCantidad(1)
    }


    return (
            <div className="detailContainer">
                <div className="detailContainer__imgContainer">
                    <div className="detailContainer__imgMain"><img src={imgDetail} alt="" /></div>
                    <div className="detailContainer__imgSelect">
                        <img onClick={seleccionImg} className="imgSeleccion" src={item.img} alt="" />
                        <img onClick={seleccionImg} className="imgSeleccion" src={item.img2} alt="" />
                    </div>
                </div>
                <div className="detailContainer__description">
                    <div className="detailContainer__name">{item.nombre}</div>
                    <div className="detailContainer__text">{item.descripcion}</div>
                    <div className="detailContainer__price">${item.precio}</div>
                    <div className="detailContainer__financing">6 cuotas sin interés de ${(item.precio/6).toFixed(2)}</div>
                    <ItemCount cantidad={cantidad} sumar={handleSumar} restar={handleRestar} agregar={() => { agregarAlCarrito(item, cantidad)}}/>
                </div>
            </div>
    )
}