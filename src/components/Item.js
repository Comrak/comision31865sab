import {Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";

const Item = ({name, img,description,price}) =>{
    return(
        <div>
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img} width="300px" height="200px"/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}
                </Card.Text>
                <Card.Text>
                    Precio: {price}$
                </Card.Text>
                <Button variant="primary">detalles</Button>
            </Card.Body>
            </Card>
            <br></br>
        </div>
    )
}

export default Item