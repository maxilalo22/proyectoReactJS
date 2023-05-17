import React from 'react'
import {Card, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

export const Item = ({ id, description, precio, image }) => {
    return (
        <div>
            <Card className='estiloCard' style={{ width: '18rem' }}>
                <Card.Img className='imagenCard' variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='cardTitle'>{description}</Card.Title>
                    <Card.Title className='cardPrice'>${precio}</Card.Title>
                    <Link to={`/detail/${id}`}>
                        <Button variant="outline-primary">Ver más detalles</Button>
                    </Link>
                    
                </Card.Body>
            </Card>
        </div>

    )
}
