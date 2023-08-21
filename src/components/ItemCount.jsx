import { useState } from "react" 

export function ItemCount ({cantidad, sumar, restar, agregar}){


    return <div className="contadorContainer">
                <div className="contadorContainer__contadores">
                    <button className="contadorContainer__restar" onClick={restar}>-</button>
                    <p className="contadorContainer__cantidad">{cantidad}</p>
                    <button className="contadorContainer__sumar" onClick={sumar}>+</button>
                </div>
                <button className="contadorContainer__agregarCarrito" onClick={agregar}>Agregar al carrito</button>
        </div>
}