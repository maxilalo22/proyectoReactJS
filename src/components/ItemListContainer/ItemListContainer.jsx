import React, { useEffect, useState } from 'react';
import { pedirProductos } from "../../helpers/pedirProductos"
import { ItemList } from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';


export const Principal = (props) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()
    

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                if (categoryId){
                    setItems(res.filter(prod => prod.category === categoryId))
                }else{
                    setItems(res)
                }
                
            })
            .catch((error) => console.log(error))
            .finally(() => { setLoading(false) })
    }, [categoryId])



    return (
        <>
        <div className='principal'></div>
        <div className='contItemList'>
            {loading
                    ? <Spinner animation="border" />
                    : <ItemList productos={items} />}
        </div>
        </>
    )
}
