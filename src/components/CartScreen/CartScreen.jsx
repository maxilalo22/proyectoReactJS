import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from '../context/CartContext';

export const CartScreen = () => {

    const { carrito, precioTotal, removerItem, vaciarCarrito } = useContext(CartContext)

    return (

        < div className='container my-5' >
            <h3>Resumen de Compra</h3>
            {
                carrito.map((prod) => (
                    <>


                        <hr />
                        <div className='listado'>
                            <p>Producto {prod.description}</p>
                            <p>$ {prod.precio}</p>
                            <p>Cantidad: {prod.counter}</p>
                            <Button className='btn btn-danger' onClick={() => removerItem(prod.id)}>
                                <BsFillTrashFill />
                            </Button>
                        </div>
                        

                    </>
                ))
            }
            <hr/>
            <strong>Precio Total: ${precioTotal()}</strong>
            <hr/>
            <Button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</Button>
        </div >
        
    )
}
