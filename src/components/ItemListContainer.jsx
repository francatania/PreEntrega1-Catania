import { Carousel } from "./Carousel"
import { ItemList } from "./ItemList"

export const ItemListContainer = (props) =>{
    // console.log(props)
    const ofertasCarousel = ["Hasta 6 cuotas sin interés", "Hacé ese regalo que tanto querés", "10% descuento en 3 cuotas sin interés"]
    // console.log(ofertasCarousel)
    
    return (
        <div className="itemListContainer">
            <Carousel ofertas={ofertasCarousel}/>
            <ItemList/>
        </div>
    )
}