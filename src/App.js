import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Principal } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartScreen } from "./components/CartScreen/CartScreen"
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import { CartProvider } from './components/context/CartContext';
import { CheckOut } from './components/CheckOut/CheckOut';



function App() {

  return (
    <>
      <CartProvider>
        
        <div>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Principal />} />
              <Route path="/productos/:categoryId" element={<Principal />} />
              <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/checkout' element={<CheckOut />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </div>

      </CartProvider>

    </>
  );
}

export default App;
