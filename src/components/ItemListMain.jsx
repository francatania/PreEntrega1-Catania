import { Link } from "react-router-dom";
import { useEffect } from "react"


export function ItemListMain(){

    const scrollToNav = () =>{
        const navbar = document.getElementById('navbar')
        window.scrollTo({
            top: navbar.offsetTop,
            behavior: 'smooth'
        })
    }

    useEffect(()=>{
        scrollToNav()
    },[])
    return <div className="itemListMain">
        <div className="itemListMain__container">
            <div className="itemListMain__modelos">

                <div className="itemListMain__mujerContainer">
                <h3 className="itemListMain__h3">Mujer</h3>
                    <Link to={'/mujer'}><div className="itemListMain__mujer"></div></Link>
                </div>

                <div className="itemListMain__hombreContainer">
                    <h3 className="itemListMain__h3">Hombre</h3>
                    <Link to={'/hombre'}><div className="itemListMain__hombre"></div></Link>
                        
                    
                </div>
            </div>
            
            <div className="itemListMain__mostrarTodoContainer">
                <h3 className="itemListMain__h3 itemListMain__h3verTodo">Ver todo</h3>
                <Link to={'/todo'}><div className="itemListMain__mostrarTodo"></div></Link>
            </div>


        </div>
    </div>
}