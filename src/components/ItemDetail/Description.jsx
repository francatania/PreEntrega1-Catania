

export function Description({item, children}){
    const talles = ["S", "M", "L", "XL", "XXL"]
    return <>
                    <div className="detailContainer__name">{item.nombre}</div>
                    <div className="detailContainer__text">{item.descripcion}</div>
                    <div className="detailContainer__price">${item.precio}</div>
                    <div className="detailContainer__financing">6 cuotas sin interés de ${(item.precio/6).toFixed(2)}</div>
                    {children}
                    <div className="detailContainer__colores"> 
                        <h3>Color: </h3> 
                        <select name="" id="" className="detailContainer__opcionesColores">
                            {item.colores.map((color, index) =>{
                                return <option value={color} key={index}>{color}</option>}
                            )}        
                        </select>
                    </div>
                    <div className="detailContainer__talles">
                        <h3>Talle: </h3>
                        <select name="" id="" className="detailContainer__opcionesTalles">
                            {talles.map((talle, index) =>{
                                return <option value={talle} key={index}>{talle}</option>
                            })}
                        </select>
                    </div>
    </>
}