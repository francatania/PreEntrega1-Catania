import { useState } from "react"

export function ItemDetail({item}){
    const [imgDetail, setImgDetal] = useState(item.img)

    return (
            <div className="detailContainer">
                <div className="detailContainer__imgContainer">
                    <div className="imgContainer__imgMain"><img src={imgDetail} alt="" /></div>
                    {/* <div className="imgContainer__imgSelect"></div> */}
                </div>
                <div className="detailContainer__description">
                    <div className="description__name">{item.nombre}</div>
                    <div className="description__text">{item.descripcion}</div>
                    <div className="description__price">{item.precio}</div>
                    <div className="description__financing">6 cuotas sin interés de ${(item.precio/6).toFixed(2)}</div>
                </div>
            </div>
    )
}