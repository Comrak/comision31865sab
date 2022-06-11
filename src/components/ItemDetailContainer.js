import { useState,useEffect } from 'react'
import { getProductByID } from '../asyncmock'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
const ItemDetailContainer = () =>{
    const[product,setProduct] = useState()
    const {productId} = useParams()
    useEffect(()=>{
        getProductByID(parseInt(productId)).then(response=>{
            setProduct(response)
        })
    },[])
    console.log(product)
    return  (
        <>
            <div>
                <h1 style={{    
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                    detalle del producto
                </h1>
                <ItemDetail {...product}/>
            </div>
        </>
    )
}

export default ItemDetailContainer