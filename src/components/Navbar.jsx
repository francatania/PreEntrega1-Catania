import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom"

export const Navbar = () =>{
    return <nav className="nav">
                <Link to={'/'} >
                    <div className="nav__brandNameContainer">
                        Baboon Clothes
                    </div>
                </Link>

                <ul className="nav__listaNav">
                    <Link to={'category/abrigo'}><li className="nav__itemLista">Abrigos</li></Link>
                    <Link to={'category/remera'}><li className="nav__itemLista">Remeras</li></Link>
                    <Link to={'category/calzado'}><li className="nav__itemLista">Calzado</li></Link>
                </ul>
                <CartWidget></CartWidget>
            </nav>
}