import React from 'react'

export const Item = (id, description, precio, image) => {
    return (
        <div>
            <h3>Id:{id}</h3>
            <p>Description: {description}</p>
            <p>Precio:{precio}</p>
            <img src={image} alt="" />
        </div>
    )
}
