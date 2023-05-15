import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import {Link} from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">
                        <img src='./36285.png' width="50"/>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/productos/Invierno">Temp Invierno</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/productos/Verano">Temp Verano</Link>
                            </li>

                        </ul>
                        
                    </div>
                </div>
                <Link to="/cart"> <CartWidget /> </Link>
            </nav>
            
        </>
    )
}
