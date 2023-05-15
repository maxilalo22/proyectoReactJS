import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'



export const ItemDetails = ({ id, description, precio, image, stock }) => {

    const navigate = useNavigate()
    const volverHaciaAtras = () =>{
        navigate(-1)
    }

    const {addToCart} = useContext(CartContext)

    const [counter, setCounter] = useState(0)

    const sumarAlCarrito = () =>{
        const newItem = {
            id,
            description,
            image,
            precio,
            counter
        }
        console.log(newItem)
        addToCart(newItem)
    }



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
                    <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
                    <Link to={`/detail/${id}`}>
                        <Button variant="primary" onClick={sumarAlCarrito}>Agregar al Carrito</Button>
                        
                    </Link>

                </Card.Body>
                <Button variant="outline-secondary" onClick={volverHaciaAtras}>Volver atrás</Button>{' '}
                <Link to='/cart' className='btn btn-info'>Ir al carrito</Link>
            </Card>


        </div>
    )
}
