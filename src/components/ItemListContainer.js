import { getProducts, getProductsByCategory  } from "../asyncmock";
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) =>{
    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    console.log(categoryId)
    useEffect(() => {
        setLoading(true)

        if(!categoryId) {
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
        
    }, [categoryId])
    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div className='fondo__Home'>
            <h1 className="main__Title">Nuestro menu</h1>
            {products.length > 0 
                ? <ItemList products={products}/>
                : <h1>No hay productos</h1>
            }
        </div>
    )
}

export default ItemListContainer