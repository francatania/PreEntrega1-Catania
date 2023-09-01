import { useContext, useEffect, useState } from "react"
import { ItemCount } from "../components/ItemCount"
import { CartContext } from "../context/CartContext"
import { BotonAgregar } from "./BotonAgregar"

export function ItemDetail({item, loading}){

    const {carrito, agregarAlCarrito} = useContext(CartContext)
    const isLoading = loading
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

    const talles = ["S", "M", "L", "XL", "XXL"]

    return (<>
            { isLoading ? <div className="detailContainer"><div>Cargando</div> </div>:
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
                    <ItemCount cantidad={cantidad} sumar={handleSumar} restar={handleRestar} />
                    <div className="detailContainer__colores"> 
                        <h3>Color: </h3> 
                        <select name="" id="" className="detailContainer__opcionesColores">
                            {item.colores.map((color, index) =>{
                                return <option value={color} key={index}>{color}</option>}
                            )}        
                        </select>
                    </div>
                    <div className="detailContainer__talles">
                        <h3>Talle: </h3>
                        <select name="" id="" className="detailContainer__opcionesTalles">
                            {talles.map((talle, index) =>{
                                return <option value={talle} key={index}>{talle}</option>
                            })}
                        </select>
                    </div>
                    <BotonAgregar agregar={() => { agregarAlCarrito(item, cantidad)}}/>

                </div>
            </div> }
            
            </>)
}