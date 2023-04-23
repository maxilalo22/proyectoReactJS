import React from 'react'
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

export const ItemDetails = ({ id, description, precio, image }) => {
    return (
        <div className='contItemList'>
            <Card className='estiloCard' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='cardTitle'>{description}</Card.Title>
                    <Card.Title className='cardPrice'>${precio}</Card.Title>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolores excepturi 
                        perferendis facilis corporis, ex sit explicabo maiores? Exercitationem quo adipisci minus 
                        corporis, quod inventore id tempore incidunt reprehenderit pariatur!</p>
                    <Link to={`/detail/${id}`}>
                        <Button variant="primary">Agregar al Carrito</Button>
                    </Link>

                </Card.Body>
            </Card>


        </div>
    )
}
