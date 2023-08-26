import { Link } from "react-router-dom"

export function FiltrosNav(){
    return <div className="nav__filtrosContainer">
                    <ul className="nav__listaNav">
                        <Link to={'category/abrigo'}><li className="nav__itemLista">Abrigos</li></Link>
                        <Link to={'category/remera'}><li className="nav__itemLista">Remeras</li></Link>
                        <Link to={'category/calzado'}><li className="nav__itemLista">Calzado</li></Link>
                    </ul>
    </div>
}