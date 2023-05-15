import React, { useEffect, useState } from 'react';
/* import { pedirProductos } from "../../helpers/pedirProductos" */
import { ItemList } from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/config';


export const Principal = (props) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore();

        const productos = db.collection('productos')

        if (categoryId) {
            const filtrado = productos.where("category", "==", categoryId)
            filtrado.get()
                .then((res) => {
                    const newItem = res.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                    setItems(newItem)
                })
                .catch((error) => console.log(error))
                .finaly(() => {
                    setLoading(false)
                })

        } else {
            productos.get()
                .then((res) => {
                    const newItem = res.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                    console.table(newItem)
                    setItems(newItem)
                })
                .catch((err) => console.log(err))
                .finally(() => { setLoading(false) })
        }
    }), [categoryId]
    /*  useEffect(() => {
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
  */


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
