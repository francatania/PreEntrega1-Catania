import { CartWidget } from "./CartWidget"

export const Navbar = () =>{
    return <nav className="nav">
                <div className="nav__brandNameContainer">
                    Baboon Clothes
                </div>
                <ul className="nav__listaNav">
                    <li className="nav__itemLista"><a href="#" className="nav__linkLista">Abrigos</a></li>
                    <li className="nav__itemLista"><a href="#" className="nav__linkLista">Remeras</a></li>
                    <li className="nav__itemLista"><a href="#" className="nav__linkLista">Calzado</a></li>
                </ul>
                <CartWidget></CartWidget>
            </nav>
}