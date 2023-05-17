import React, { useEffect, useState } from 'react'
import { getFirestore } from '../../firebase/config';
import Spinner from 'react-bootstrap/Spinner';
import { ItemDetails } from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()

        const productos = db.collection('productos')

        const item = productos.doc(itemId)

        item.get()
            .then((doc) => {
                setItem({
                    id: doc.id, ...doc.data()
                })

            })
            .catch((err) => console.log(err))
            .finally(() => {

                setLoading(false)
            })

    }, [itemId])


    return (
        <section className='contItemList'>
            
            {loading
            ?<Spinner animation="border" />
            :<ItemDetails {...item}/>}
            


        </section>
    )
}