export const ItemListContainer = (props) =>{
    console.log(props)
    return (
        <div className="main">
            <h2 className="main__mainTittle">{props.greeting}</h2>
        </div>
    )
}