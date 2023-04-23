import React from 'react'
import {Item} from "../Item/Item"



export const ItemList = ({productos=[]}) => {
    return (
        <div className='contProd'>
            <h3>Nuestros Productos</h3>
            <div className='fila'>
                {productos.map((item) => <Item{...item} key={item.id}/>)}
            </div>
            


        </div>
    )
}
