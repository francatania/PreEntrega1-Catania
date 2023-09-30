import { BarraBuscadora } from "./BarraBuscadora"
import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom"
import { FiltrosNav } from "./FiltrosNav"
import { useParams } from "react-router-dom"
import { BurguerMenu } from "./BurguerMenu"
import {useEffect, useState} from "react"

export const Navbar = () =>{
    const parametros = useParams()
    const [clicked, setClicked] = useState(false)
    const [mobileView, setMobileView] = useState(false)
    const handleClick = ()=>{
        setClicked(!clicked)
        console.log(clicked)
    }

    useEffect(()=>{
        const handleResize = ()=>{
            const isMobile = window.innerWidth < 750;
            setMobileView(isMobile);
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () =>{
            window.removeEventListener('resize', handleResize);
        }

    }, [])
  
    return <nav className="nav" id="navbar">
                <div className="nav__navWidth">
                    <BurguerMenu clicked={clicked} mobile={mobileView} handleClick={handleClick}/>
                    <Link to={'/'} >
                        <div className="nav__brandNameContainer">
                            Baboon Clothes
                        </div>
                    </Link>

                    {!mobileView ? <>
                        <BarraBuscadora clicked={clicked}/>
                    
                    </> : null}

                    <Link to={'/carrito'}>
                            <CartWidget></CartWidget>
                    </Link>
                </div>

                
                <div className="nav__separadorNav"></div>
                {!mobileView ? <>
                    <FiltrosNav clicked={clicked}/>
                </>: null}


            </nav>
}