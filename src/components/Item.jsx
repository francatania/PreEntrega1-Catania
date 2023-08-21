import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export const Item = ({img, img2, nombre, precio, id, agregar }) =>{

    

    const [imgHover, setImgHover] = useState(img)
    const cambiarImg = () =>{
        setImgHover(img2)
    }
    const volverImg = () =>{
        setImgHover(img)
    }

    return (
        <div className="card">
            <div className="card__imgContainer">
                <img onMouseEnter={cambiarImg} onMouseLeave={volverImg} src={imgHover} alt="" className="card__img" />
            </div>
            <div className="card__description">
                <div className="card__nameProduct">{nombre}</div>
                <div className="card__priceProduct">${precio}</div>
                <div className="card__financing">6 cuotas sin interés de ${(precio/6).toFixed(2)}</div>
            </div>
            <div className="card__actions">
                <button className="agregarButton" onClick={agregar}>Agregar</button>
                <Link to={`/item/${id}`}><button className="verButton">Ver</button></Link>
            </div>
        </div>
    )
}