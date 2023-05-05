import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

    const {calcularCantidad} = useContext(CartContext)

    return (
        <div className='contCart'>
            <p>{calcularCantidad()}</p>
            <a href='#'>
                <img src='./cartImage.svg' width="30"/>
            </a>
        </div>
    )
}
