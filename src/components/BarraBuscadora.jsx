import { Link } from "react-router-dom"
import { useState } from "react"

export function BarraBuscadora({clicked, mobile, exit}){
    const [textoBusqueda, setTextoBusqueda] = useState("")

    const handleChangeInput = (e) =>{
        const nuevoTexto = e.target.value
        const nuevoTextoMinuscula = nuevoTexto.toLowerCase()
        setTextoBusqueda(nuevoTexto.toLowerCase())
    }


    return <div className={`buscadorContainer ${clicked ? 'buscadorContainer__active' : ''}`}>
        <input value={textoBusqueda} onChange={handleChangeInput} type="input" id ="input"className="buscadorContainer__input" placeholder="¿Que estás buscando?"/>
        <div onClick={exit} className="buscadorContainer__iconContainer">
            <Link to={`search/${textoBusqueda}`}><i className="fa-solid fa-magnifying-glass"></i> </Link>
        </div>
    </div>
}