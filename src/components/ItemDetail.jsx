import { useEffect, useState } from "react"

export function ItemDetail({item}){
    const [imgDetail, setImgDetal] = useState("")
    const seleccionImg = (e) =>{
        console.log(e)
        setImgDetal(e.target.currentSrc)
    }
    useEffect(()=>{
        setImgDetal(item.img)
    }, [item])

    return (
            <div className="detailContainer">
                <div className="detailContainer__imgContainer">
                    <div className="detailContainer__imgMain"><img src={imgDetail} alt="" /></div>
                    <div className="detailContainer__imgSelect">
                        <img onClick={seleccionImg} className="imgSeleccion" src={item.img} alt="" />
                        <img onClick={seleccionImg} className="imgSeleccion" src={item.img2} alt="" />
                    </div>
                </div>
                <div className="detailContainer__description">
                    <div className="detailContainer__name">{item.nombre}</div>
                    <div className="detailContainer__text">{item.descripcion}</div>
                    <div className="detailContainer__price">${item.precio}</div>
                    <div className="detailContainer__financing">6 cuotas sin interés de ${(item.precio/6).toFixed(2)}</div>
                </div>
            </div>
    )
}