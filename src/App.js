import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Principal } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "./App.css"


function App() {
  return (
    <>
      <body>
        <div className="containerGral">
          <div className="contenedor1">
            <NavBar />
          </div>
          <div className='principal'></div>

        </div>
        <div className="contenedor2">
          <Principal greeting="Hola Mundo!" />
        </div>
      </body>
    </>
  );
}

export default App;
