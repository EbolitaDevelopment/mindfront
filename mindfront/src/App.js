import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Introduccion from './screen/Introduccion';
import Cuestionario from './screen/Cuestionario';
import Terminosycondiciones from './screen/Terminosycondiciones';
import Isesion from './screen/iniciosesion';
import Registro from './screen/registro';
import Pcompleto from './screen/procesocompleto';
import Pincompleto from './screen/procesoincompleto';
import Sesiones from './screen/sesiones';
import Nav from './components/Nav';
import Proposito from './screen/proposito';
import Juegos from './screen/Juegos';
import Canalizacion from './screen/Canalizacion';
import Cuenta from './screen/Cuenta';

function App() {
  return (
    <BrowserRouter>
      <div className="App-header">
        
        <Nav />
        <Sesiones />
      </div>
      <div className="App-body">
        <Routes>
          <Route path="/" element={<Introduccion />} />
          <Route path="/registro" element={< Registro/>} />
          <Route path="/iniciosesion" element={<Isesion />} />
          <Route path="/cuestionario" element={<Cuestionario/>} />
          <Route path='/terminosycondiciones' element={<Terminosycondiciones/>}/>
          <Route path="/procesocompleto" element={<Pcompleto />} />
          <Route path="/procesoincompleto" element={<Pincompleto />} />
          <Route path="/proposito" element={<Proposito />} />
          <Route path="/juegos" element={< Juegos />} />
          <Route path="/canalizacion" element={< Canalizacion />} />
          <Route path='/cuenta' element={<Cuenta />}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;