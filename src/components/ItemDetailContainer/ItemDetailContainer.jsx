import React, { useEffect, useState } from 'react'
import { pedirProductos } from "../../helpers/pedirProductos"
import Spinner from 'react-bootstrap/Spinner';
import { ItemDetails } from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    useEffect(()=>{

        setLoading(true)
        pedirProductos()
            .then(res =>{
                setItem(res.find(prod => prod.id === Number(itemId)))
            })
            .catch((error) => console.log(error))
            .finally(()=>{
                setLoading(false)
            })

    },[])


    return (
        <section>

            loading
            ?<Spinner animation="border" />
            :<ItemDetails {...item}/>


        </section>
    )
}
