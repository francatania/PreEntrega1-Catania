import { useContext, useEffect, useState } from "react"
import { ItemQuantitySelector } from "./ItemQuantitySelector"
import { CartContext } from "../../context/CartContext"
import { AddItemButton } from "./AddItemButton"
import { Description } from "./Description"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";


export function ItemDetail({item, loading}){

    const {carrito, agregarAlCarrito} = useContext(CartContext)
    const isLoading = loading
    const [imgDetail, setImgDetal] = useState("")
    const seleccionImg = (e) =>{
        setImgDetal(e.target.currentSrc)
    }
    useEffect(()=>{
        setImgDetal(item.img)
    }, [item])


    const scrollToNav = () =>{
        const navbar = document.getElementById('navbar')
        window.scrollTo({
            top: navbar.offsetTop,
            behavior: 'smooth'
        })
    }

    useEffect(()=>{
        scrollToNav()
    },[])


    const [cantidad, setCantidad] = useState(1)

    const handleSumar = () =>{
        setCantidad(cantidad+1)
    }

    const handleRestar = () =>{
        cantidad > 1 ? setCantidad(cantidad-1) : setCantidad(1)
    }

    const agregarYNotificar = () =>{
        agregarAlCarrito(item, cantidad)
        toast.success('Agregado!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            backgroundColor: "black"
            });
    }

    const override = {
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",     
        height: "100vh",          
    };

    return (<>
                {isLoading ? <div className="itemList itemList__loading">
                    <h3>Cargando</h3>
                    <ClipLoader
                        color={'#3e2f5b'}
                        loading={isLoading}
                        css={override}
                        size={30}
                    />
                    </div>:
            <div className="detailContainer" >
                <div className="detailContainer__imgContainer">
                    <div className="detailContainer__imgMain"><img src={imgDetail} alt="" /></div>
                    <div className="detailContainer__imgSelect">
                        <img onClick={seleccionImg} className="imgSeleccion" src={item.img} alt="" />
                        <img onClick={seleccionImg} className="imgSeleccion" src={item.img2} alt="" />
                    </div>
                </div>
                <div className="detailContainer__description">
                    <Description item={item}>
                        <ItemQuantitySelector cantidad={cantidad} sumar={handleSumar} restar={handleRestar} />
                    </Description>
                    <AddItemButton agregar={() => { agregarYNotificar()}}/>
                    <ToastContainer />
                </div>
            </div> }
            
            </>)
}