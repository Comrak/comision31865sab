import Item from "./Item"

const ItemList =({products})=>{
    return(
        <div  style={{ width: '85%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', 'margin-top':'5%'}}>
            {products.map(product => <Item key={product.id}{...product}/>)}     
        </div>
            
        
    )
}
export default ItemList