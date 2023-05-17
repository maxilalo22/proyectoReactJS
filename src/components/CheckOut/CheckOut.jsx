import React, { useState, useContext } from 'react'
import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom'
import { getFirestore } from "../../firebase/config"
import firebase from "firebase"
import "firebase/firestore"
import Swal from 'sweetalert2'




export const CheckOut = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)


    const [email, setEmail] = useState("")

    const [nombre, setNombre] = useState("")

    const [apellido, setApellido] = useState("")

    const [telefono, setTelefono] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault()

        console.log("Email:", email)
        console.log("Nombre:", nombre)
        console.log("Apellido:", apellido)
        console.log("Teléfono:", telefono)

        const orden = {
            buyer: {
                email,
                nombre,
                apellido,
                telefono
            },
            item: carrito,
            total_price: precioTotal(),
            data: firebase.firestore.Timestamp.fromDate(new Date())
        }


        const db = getFirestore()

        const ordenes = db.collection('ordenes')


        
        ordenes.add(orden)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Su compra fue realizada con éxito',
                    text: `Guarde su numero de compra: ${res.id}`,
                    willClose: () => {
                        vaciarCarrito()
                    }
                })
            })
            .finally(() => {
                console.log('Operacion realizada con exito')
            })


        carrito.forEach((item) => {
            const docRef = db.collection('productos').doc(item.id)

            docRef.get()
                .then((doc) => {
                    docRef.update({
                        stock: doc.data().stock - item.counter
                    })
                })
        })
    }


    return (
        <div className='container'>
            <h3>Ultimo Paso!</h3>
            <hr />

            <form onSubmit={handleSubmit} className='container mt-3'>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control" id="" aria-describedby="" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                    <input type="text" className="form-control" id="" aria-describedby="" placeholder="" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Apellido</label>
                    <input type="text" className="form-control" id="" aria-describedby="" placeholder="" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Telefono</label>
                    <input type="number" className="form-control" id="" aria-describedby="" placeholder="" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <button type='submit' className='btn btn-success'>Finalizar</button>
                <Link to='/cart' className='btn btn-warning'>Volver al Carrito</Link>

            </form>



        </div>
    )
}
