import { CartWidget } from "./CartWidget"

export const Navbar = () =>{
    return <nav className="nav">
                <div className="nav__logoContainer">
                    Baboon Clothes
                </div>
                <ul className="nav__listaNav">
                    <li className="nav__itemLista">Abrigos</li>
                    <li className="nav__itemLista">Remeras</li>
                    <li className="nav__itemLista">Calzado</li>
                </ul>
                <CartWidget></CartWidget>
            </nav>
}