import { ItemList } from "./ItemList"

export const ItemListContainer = (props) =>{
    console.log(props)

    
    return (
        <div className="itemListContainer">
            <div className="main">
                <h2 className="main__mainTittle">{props.greeting}</h2>
            </div>
            <ItemList/>
        </div>
    )
}