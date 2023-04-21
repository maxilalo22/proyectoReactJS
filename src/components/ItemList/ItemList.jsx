import React from 'react'
import {Item} from "../Item/Item"



export const ItemList = ({stock=[]}) => {
    return (
        <div>

            
            {stock.map((item) => <Item{...item} key={item.id}/>)}


        </div>
    )
}
