import Card from "react-bootstrap/Card";
import { useState, useContext } from 'react'
import ItemCount from '../components/ItemCount'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, name, img, category, description, price, stock,ingredients}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${name}`)
        addItem({ id, name, price, quantity})
        setQuantityAdded(quantity)
    }
    // console.log(ingredients)
    // let displayIng = ''
    // ingredients.forEach((ing)=>{
    //     displayIng +=` ${ing}`
    // })
    //  console.log(displayIng)
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
                {/* <p>
                    ingredientes:
                    <ul>
                        {displayIng}
                    </ul>
                </p> */}
            </section>           
            <footer>
                { quantityAdded === 0 
                    ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                    :  <Link to='/cart'>Terminar compra</Link>
                }
            </footer>
        </article>
        </div>
    )
}

export default ItemDetail