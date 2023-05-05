import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Principal } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import {CartScreen} from "./components/CartScreen/CartScreen"
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import { CartContext } from './components/context/CartContext';
import { useState } from 'react';


function App() {

  const[carrito, setCarrito] = useState([])
  console.log(carrito)

  const addToCart = (item) =>{
    setCarrito([...carrito, item])
  }

  const calcularCantidad =() =>{
  
    return carrito.reduce((acc, prod) => acc + prod.counter, 0)
  }

  const precioTotal =() =>{
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.counter, 0)
  }

  const removerItem = (itemId) => {
    const newCart = carrito.filter((prod)=> prod.id !== itemId)
    setCarrito(newCart)
  }

  const vaciarCarrito = () =>{
    setCarrito([])
  }


  return (
    <>
      <CartContext.Provider value={{
        carrito, addToCart, calcularCantidad, precioTotal, removerItem, vaciarCarrito
      }}>
        <div>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Principal />} />
              <Route path="/productos/:categoryId" element={<Principal />} />
              <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartScreen/>}/>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </div>
      </CartContext.Provider>


    </>
  );
}

export default App;
