import { getProducts } from "../asyncmock";
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
const ItemListContainer = (props) =>{

    const [products,setProducts] = useState([])

    useEffect(()=>{
        getProducts().then(response =>{
            setProducts(response)
        })
    },[])


    return (
        <div className='fondo__Home'>
            <h1 className="main__Title">Nuestro menu</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer