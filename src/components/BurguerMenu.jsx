import { useState } from "react";
import { BarraBuscadora } from "./BarraBuscadora";
import { FiltrosNavMobile } from "./FiltrosNavMobile";

export function BurguerMenu({clicked, handleClick}){

    const[exit, setExit] = useState(false)

    const handleExit = () =>{
        setExit(!exit)
        handleClick()
    }

    return  <div className={`burguer-container ${clicked? ' burguer-container__active' : ''}`} >
                <i className="fa-solid fa-bars" onClick={handleClick}></i>
                <div className={`burguer-container__menu ${clicked? ' burguer-container__active-menu' : ''}`}>
                    <BarraBuscadora clicked={clicked} exit={handleExit}/>
                    <FiltrosNavMobile clicked={clicked} exit={handleExit}/>
                    <div className="burguer-container__salir" onClick={handleExit}><i className="fa-regular fa-circle-xmark"></i></div>
                </div>

            </div>
}