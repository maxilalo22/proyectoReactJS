import React from 'react'

export const Principal = (props) => {
    return (
        <div className='contItemList'>
            <h2>ItemListContainer</h2>
            <hr/>
            <h3> {props.greeting} </h3>
        </div>
    )
}
