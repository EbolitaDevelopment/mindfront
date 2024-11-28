import './App.css';
import Introduccion from './screen/Introduccion';
import Cuestionario from './screen/Cuestionario';
import Isesion from './screen/iniciosesion';
import Registrar from './screen/registro';
import Pcompleto from './screen/procesocompleto';
import Pincompleto from './screen/procesoincompleto';
import Sesiones from './components/sesiones';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Proposito from './screen/Proposito';
import Juegos from './screen/Juegos';
import Japi from './components/post';
import Canalizacion from './screen/Canalizacion';
import Cuenta from './screen/Cuenta';
import Politicadeprivacidad from './screen/TerminosyCondiciones';
import Terminosycondiciones from './screen/PoliticadePrivacidad';

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
          <Route path="/registro" element={< Registrar/>} />
          <Route path="/iniciosesion" element={<Isesion />} />
          <Route path="/cuestionario" element={<Cuestionario/>} />
          <Route path="/procesocompleto" element={<Pcompleto />} />
          <Route path="/procesoincompleto" element={<Pincompleto />} />
          <Route path="/proposito" element={<Proposito />} />
          <Route path="/juegos" element={< Juegos />} />
          <Route path="/api" element={< Japi />} />
          <Route path="/canalizacion" element={< Canalizacion />} />
          <Route path="/cuenta" element={< Cuenta />} />
          <Route path="/terminosycondiciones" element={< Terminosycondiciones />} />
          <Route path="/politicadeprivacidad" element={< Politicadeprivacidad />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;