import './App.css';
import Introduccion from './components/Introduccion';
import Cuestionario from './components/Cuestionario';
import Isesion from './components/iniciosesion';
import Registro from './components/registro';
import Pcompleto from './components/procesocompleto';
import Pincompleto from './components/procesoincompleto';
import Sesiones from './components/sesiones';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Proposito from './components/proposito';

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
          <Route path="/procesocompleto" element={<Pcompleto />} />
          <Route path="/procesoincompleto" element={<Pincompleto />} />
          <Route path="/proposito" element={<Proposito />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;