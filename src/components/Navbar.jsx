import { BarraBuscadora } from "./BarraBuscadora"
import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom"
import { FiltrosNav } from "./FiltrosNav"
import { useParams } from "react-router-dom"

export const Navbar = () =>{
    const parametros = useParams()
    return <nav className="nav" id="navbar">
                <div className="nav__navWidth">
                    <Link to={'/'} >
                        <div className="nav__brandNameContainer">
                            Baboon Clothes
                        </div>
                    </Link>
                    <BarraBuscadora/>

                    <Link to={'/carrito'}>
                        <CartWidget></CartWidget>
                    </Link>
                </div>
                <div className="nav__separadorNav"></div>
                <FiltrosNav/>
            </nav>
}