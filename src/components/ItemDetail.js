import Card from "react-bootstrap/Card";

const ItemDetail = ({name, img,price,id,description}) =>{
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
           <Card style={{ width: '20rem'}}>
                <Card.Img variant="top" src={img} width="300px" height="200px"/>
                <Card.Body style={{backgroundColor:'#7858A6'}}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}
                    </Card.Text>
                    <Card.Text>
                        Precio: {price}$
                    </Card.Text>
                </Card.Body>
                </Card>
            <br></br>
        </div>
    )
}

export default ItemDetail