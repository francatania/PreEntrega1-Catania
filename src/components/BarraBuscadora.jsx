import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export function BarraBuscadora(){
    const [textoBusqueda, setTextoBusqueda] = useState("")

    const handleChangeInput = (e) =>{
        const nuevoTexto = e.target.value
        const nuevoTextoMinuscula = nuevoTexto.toLowerCase()
        setTextoBusqueda(nuevoTexto.toLowerCase())
    }


    return <div className="buscadorContainer">
        <input value={textoBusqueda} onChange={handleChangeInput} type="input" id ="input"className="buscadorContainer__input" placeholder="¿Que estás buscando?"/>
        <div className="buscadorContainer__iconContainer">
            <Link to={`search/${textoBusqueda}`}><i className="fa-solid fa-magnifying-glass"></i> </Link>
        </div>
    </div>
}