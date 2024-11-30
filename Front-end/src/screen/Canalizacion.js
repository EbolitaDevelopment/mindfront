import React from 'react'
import styled from 'styled-components';  // Correct import
const Canalizacion = () => {
  return (
    <Can>
    <div class="content">
      <h1>CANALIZACIÓN</h1>
      <p class="description">
        Si después de utilizar las herramientas que buscamos proporcionar no se siente ningún progreso y considera que está en un nivel avanzado de pánico social o generó algún tipo de trastorno psicológico como ansiedad elevada o depresión con niveles que requieren de medicinas, nuestro programa ya no será útil ya que más que una aplicación para curar es para aprender a llevar las tensiones que la afección puede provocar en una vida cotidiana y a prevenir que escale a niveles que requieran de atención médica formal debido a trastornos generados por la misma.
        <br/>
        <br/>
        Para poder seguir ayudando a los usuarios de nuestra plataforma aunque no sea con el servicio, en esta sección presentamos algunas propuestas de atención médica formal tanto pública como privada para el tratamiento más avanzado de la afección. Dicha lista está proporcionada por el gobierno de México acerca de los hospitales psiquiátricos en todos los estados de la república, y su contacto tanto móvil como de correo.
      </p>
      <div className='hospitales'>
      <div class="hospital-info">
        <h2>HOSPITALES CERCANOS</h2>
        <p>ESTADO: XXX<br/>
        UBICACIÓN: AV. XXX<br/>
        NOMBRE: HOSPITAL XXX<br/>
        AFILIACIÓN: GUBERNAMENTAL</p>
      </div><div >
        <button class="input">Seleccione su Estado</button>
        <button class="button">Mostrar Locaciones</button>
      </div>
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
    margin-right:5%;
    margin-left:5%;
}

h1{
    font-size: 7vh;
    color: #008dda;
    text-align: center;
    margin-bottom: 1%;

}
    .hospital-info {
    margin:0;
    }
    .hospital-info p, .hospital-info h2{
    margin-left:0;
    }
    h2{
    font-size: 5vh;
    color: #008dda;
    text-align: left;
    margin-bottom: 1%;

}
p{
    font-size: 25px;
    color: black;
    text-align: justify;
    margin-bottom: 0;
}
.content{
  height:88.7vh;
}
.hospitales{
    display: grid;
    grid-template-columns: 60% 32%; /* Divide el contenedor en dos columnas iguales */;
    gap:8%;
    }

  .button , .input{
            width: 100%;
            background-color: #ace2e1;
            border: 0;
            margin-top: 10%;
            margin-bottom: 10%;
            padding: 10%;
            color: #008dda;
            font-family: League Spartan;
            border-radius: 100px;
            font-size: 3.3vh;
            cursor: pointer;
            display: block; 
            
        }
    .button:hover {
    background-color: #008dda;
    color: #ace2e1;
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

`;