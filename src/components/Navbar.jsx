import { BarraBuscadora } from "./BarraBuscadora"
import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom"
import { FiltrosNav } from "./FiltrosNav"

export const Navbar = () =>{
    return <nav className="nav">
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