
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'

const Item = ({name, img,price,id}) =>{
    return(
        <div>
            <Card style={{ width: '20rem'}}>
            <Card.Img variant="top" src={img} width="300px" height="200px"/>
            <Card.Body style={{backgroundColor:'#7858A6'}}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Precio: {price}$
                </Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary">detalles</Button>
                </Link>
            </Card.Body>
            </Card>
            <br></br>
        </div>
    )
}

export default Item