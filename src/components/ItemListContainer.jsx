import { useParams } from "react-router-dom"
import { Carousel } from "./Carousel"
import { ItemList } from "./ItemList"
import { Busqueda } from "./Busqueda"

export const ItemListContainer = (props) =>{

    const ofertasCarousel = ["Hasta 6 cuotas sin interés", "Hacé ese regalo que tanto querés", "10% descuento en 3 cuotas sin interés"]

    
    return (
        <div className="itemListContainer">
            <Carousel ofertas={ofertasCarousel}/>
            <ItemList/>

        </div>
    )
}