import React, { useState } from 'react'
import { Link } from 'react-router-dom'




export const CheckOut = () => {

    const [email, setEmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")

    const handleSubmit =(e) =>{
        e.preventDefault()
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
        <Link to='/cart' className='btn btn-info'>Volver al Carrito</Link>

        </form>



        </div>
    )
}
