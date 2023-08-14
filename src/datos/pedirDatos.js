import { useParams } from 'react-router-dom'
import data from '../datos/data.json'


export const pedirDatos = ()=>{

    return new Promise((resolve, reject) =>{
        resolve(data)
        console.log(data)
    })
}

export  const pedirDatosCategoria = (categoryId)=>{
    return new Promise ((resolve, reject) =>{
        if (categoryId === undefined){
            resolve(data)
        }
        else{
            const filtro = data.filter((prenda) => {return prenda.categoria === categoryId})
            resolve(filtro)
        }


    })
}

export const pedirItemPorId = (id) =>{
    return new Promise((resolve, reject) =>{
        const item = data.find((el)=>el.id === parseInt(id))
        
        if(item){
            resolve(item)
            // console.log(item + "probando")
        }  else{
            reject({
            error: "No se encontró el producto."
        })
        } 
    })
}