// useState pasa información del padre al hijo
import { useState,useEffect } from "react";
// importamos las peticiones
import {obtenerProductos} from "../services/productosService"
// importamos
import GroupProducts from "../components/GroupProducts";
import CustomCarousel from "../components/CustomCarousel";



export default function PortadaView(){ 
    const [productos,setProductos] = useState([])
    
    // para obtener productos
    const getProductos = async()=>{
        try {
            let productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
        } catch (error) {
            
        }
    }  

    // useeffect se ejecuta cuando el componente ya ha sido montado
    useEffect(()=>{
        getProductos()
    },[]) // [] sirve para que no se haga un bucle

    return(
        <div>
            <CustomCarousel/>          
            <GroupProducts productos={productos}></GroupProducts>

        </div>
    )
}