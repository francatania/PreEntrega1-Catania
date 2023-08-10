import data from '../datos/data.json'

export const pedirDatos = ()=>{
    return new Promise((resolve, reject) =>{
        resolve(data)
        console.log(data)
    })
}

export const pedirItemPorId = (id) =>{
    return new Promise((resolve, reject) =>{
        const item = data.find((el)=>{
            el.id === id
        })

        if(item){
            resolve(item)
            console.log(item + "probando")
        }  else{
            reject({
            error: "No se encontró el producto."
        })
        } 
    })
}