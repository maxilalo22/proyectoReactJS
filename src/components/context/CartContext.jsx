import { createContext, useEffect } from "react";
import { useState } from 'react';


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(init)
    console.log(carrito)
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })



    const addToCart = (item) => {
        setCarrito([...carrito, item])
    }

    const calcularCantidad = () => {

        return carrito.reduce((acc, prod) => acc + prod.counter, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.counter, 0)
    }

    const removerItem = (itemId) => {
        const newCart = carrito.filter((prod) => prod.id !== itemId)
        setCarrito(newCart)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }


    return (
        <CartContext.Provider value={{
            carrito, addToCart, calcularCantidad, precioTotal, removerItem, vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}