import React from 'react'
import styled from 'styled-components';  // Correct import
const Canalizacion = () => {
  return (
    <Can>
    <div class="content">
      <h1>CANALIZACIÓN</h1>
      <p class="description">
        Si después de utilizar las herramientas que buscamos proporcionar no se siente ningún progreso y considera que está en un nivel avanzado de pánico social o generó algún tipo de trastorno psicológico como ansiedad elevada o depresión con niveles que requieren de medicinas, nuestro programa ya no será útil ya que más que una aplicación para curar es para aprender a llevar las tensiones que la afección puede provocar en una vida cotidiana y a prevenir que escale a niveles que requieran de atención médica formal debido a trastornos generados por la misma.
      </p>
      <p class="description">
        Para poder seguir ayudando a los usuarios de nuestra plataforma aunque no sea con el servicio, en esta sección presentamos algunas propuestas de atención médica formal tanto pública como privada para el tratamiento más avanzado de la afección. Dicha lista está proporcionada por el gobierno de México acerca de los hospitales psiquiátricos en todos los estados de la república, y su contacto tanto móvil como de correo.
      </p>
      <div class="buttons-section">
        <button class="select-state-btn">Seleccione su Estado</button>
        <button class="show-locations-btn">Mostrar Locaciones</button>
      </div>
      <div class="hospital-info">
        <h2>HOSPITALES CERCANOS</h2>
        <p><strong>ESTADO:</strong> XXX</p>
        <p><strong>UBICACIÓN:</strong> AV. XXX</p>
        <p><strong>NOMBRE:</strong> HOSPITAL XXX</p>
        <p><strong>AFILIACIÓN:</strong> GUBERNAMENTAL</p>
      </div>
  </div></Can>
  )
}

export default Canalizacion
const Can = styled.nav`
   @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
        .font-style-title {font-family:'League Spartan', sans-serif !important; } 
        .font-style-subtitle {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-heading {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-normalText {font-family: 'League Spartan', sans-serif !important; }
*{
    background-color: #f7eedd;
}
body{
    padding: 0;
    margin: 0%;
    font-family: League Spartan;
}
h1{
    font-size: 70px;
    color: #008dda;
    text-align: center;

}
p{
    font-size: 25px;
    color: black;
    
}
.principal{
    display: flex;
    justify-content: space-between;
    padding: 0;
}
.contenedor{
    width: 45%;
    display: flex;
    justify-content: space-around ;
}

.centro{
    vertical-align: middle ;
}

.central{
    display: flex;
    justify-content:space-around;
    padding: 0;
}
.central div {
    flex: 1;
}
.buttons-section {
  position: absolute; 
  bottom: 20px; 
  right: 20px; 
  display: flex;
  flex-direction: column; 
  gap: 10px; 
}

.select-state-btn, .show-locations-btn {
  width: 250px; 
  background-color: #ace2e1; 
  border: none; 
  border-radius: 100px; 
  padding: 15px; 
  font-size: 20px; 
  color: black; 
  font-family: 'League Spartan', sans-serif;
  cursor: pointer; 
  text-align: center;
}
h5{
    font-size: 20px;
    text-align: center;
}
.imagen{
    vertical-align: middle;
    align-items: center;
}
`;
