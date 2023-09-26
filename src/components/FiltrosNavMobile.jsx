import { Link } from "react-router-dom"

export function FiltrosNavMobile({clicked, exit}){
    return <div className={`filtros-container-mobile ${clicked ? 'filtros-container-mobile__active' : ''}`}>
                    <div className={`filtros-container-mobile__listaNav ${clicked ? 'filtros-container-mobile__listaNav-active' : '' }`}>
                        <Link to={'category/abrigo'}><h3 onClick={exit} className={`filtros-container-mobile__h3 ${clicked ? 'filtros-container-mobile__h3-active' : '' }`}>Abrigos</h3></Link>
                        <Link to={'category/remera'}><h3 onClick={exit} className="filtros-container-mobile__h3">Remeras</h3></Link>
                        <Link to={'category/calzado'}><h3 onClick={exit} className="filtros-container-mobile__h3">Calzado</h3></Link>
                    </div>
    </div>
}