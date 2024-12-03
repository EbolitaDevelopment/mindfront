import './App.css';import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom'; import Cookies from 'js-cookie';
import Introduccion from './screen/Introduccion'; import Cuestionario from './screen/Cuestionario';
import Isesion from './screen/iniciosesion'; import Registrar from './screen/registro';
import Pcompleto from './screen/procesocompleto'; import Pincompleto from './screen/procesoincompleto';
import Sesiones from './components/sesiones'; import Nav from './components/Nav';
import Proposito from './screen/Proposito'; import Juegos from './screen/Juegos';
import Canalizacion from './screen/Canalizacion';
import Cuenta from './screen/Cuenta'; import Politicadeprivacidad from './screen/PoliticadePrivacidad';
import Loggeado from './screen/Loggeado';import Retos from './screen/Retos';
import Nologgeado from './screen/Nologgeado'; import Terminosycondiciones from './screen/TerminosyCondiciones';
import React from 'react';

const UseAuth = async () => {
  const token = Cookies.get('jwt');
  
  try {
    const response = await fetch("http://localhost:4000/api/autorizacion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ cookie: token })
    });
    
    const result = await response.json();
    console.log(result)
    return result.authorized;
  } catch (error) {
    console.error("Authorization check failed", error);
    return false;
  }
};


const ProtectedRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = React.useState(null);

  React.useEffect(() => {
    const checkAuthorization = async () => {
      const authorized = await UseAuth();
      console.log(authorized);
      setIsAuthorized(authorized);
    };
    checkAuthorization();
  }, []);

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthorized) {
    return <Navigate to="/loginrequerido" replace />;
  }

  return children; 
};


const UnprotectedRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = React.useState(null);

  React.useEffect(() => {
    const checkAuthorization = async () => {
      const authorized = await UseAuth();
      setIsAuthorized(authorized);
    };
    checkAuthorization();
  }, []);

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  if (isAuthorized) {
    return <Navigate to="/nologinrequerido" replace />;
  }

  return children; 
};

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
          <Route 
            path="/registro" 
            element={
              <UnprotectedRoute>
                <Registrar />
              </UnprotectedRoute>
            } 
          />
          <Route 
            path="/iniciosesion" 
            element={
              <UnprotectedRoute>
                <Isesion />
              </UnprotectedRoute>
            } 
          />
          <Route path="/cuestionario" element={<Cuestionario/>} />
          <Route path="/procesocompleto" element={<Pcompleto />} />
          <Route path="/procesoincompleto" element={<Pincompleto />} />
          <Route path="/proposito" element={<Proposito />} />
          <Route 
            path="/juegos" 
            element={
              <ProtectedRoute>
                <Juegos />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/canalizacion" 
            element={
              <ProtectedRoute>
                <Canalizacion />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/cuenta" 
            element={
              <ProtectedRoute>
                <Cuenta />
              </ProtectedRoute>
            } 
          />
          <Route path="/terminosycondiciones" element={<Terminosycondiciones />} />
          <Route path="/politicadeprivacidad" element={<Politicadeprivacidad />} />
          <Route path="/nologinrequerido" element={<Nologgeado />} />
          <Route path="/loginrequerido" element={<Loggeado />} />
          <Route 
            path="/retos" 
            element={
              <ProtectedRoute>
                <Retos />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;