import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Principal } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer" 
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <body>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/productos/:categoryId" element={<Principal />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </body>



    </>
  );
}

export default App;
