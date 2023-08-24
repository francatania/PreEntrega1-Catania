

export function ItemCount ({cantidad, sumar, restar}){


    return <div className="contadorContainer">
                <div className="contadorContainer__contadores">
                    <button className="contadorContainer__restar" onClick={restar}>-</button>
                    <p className="contadorContainer__cantidad">{cantidad}</p>
                    <button className="contadorContainer__sumar" onClick={sumar}>+</button>
                </div>
                
        </div>
}