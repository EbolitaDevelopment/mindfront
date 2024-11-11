import React from 'react';
import styled from 'styled-components';

const Introduccion = () => {
  return (
    <Intro>
      <div className="introduccion">
        <h1>MINDLOOSE</h1>
        <img src="logo.png" alt="Mindloose logo" />
        <p>Aplicación diseñada para acompañarte en tu batalla con la agorafobia.</p>
      </div>
      <div className="nosotros">
        <h2>SOBRE NOSOTROS</h2>
        <p>
          Mindloose es una aplicación web propuesta con el fin de ayudar a
          personas con pánico social o agorafobia mediante una terapia de
          exposición.
        </p>
        <p>
          Esta aplicación está diseñada por alumnos del Instituto Politécnico
          Nacional de la unidad CECYT9 "Centro de Estudios Científicos y
          Tecnológicos".
        </p>
        <img src="introduccion.webp" alt="Acerca de Nosotros" />
      </div>
    </Intro>
  );
};

export default Introduccion;

const Intro = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');

  * {
    background-color: #f7eedd;
    font-family: 'League Spartan', sans-serif;
    box-sizing: border-box; 
  }

  .introduccion{
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    height: 100vh; 
    text-align: center; 
  }
  .nosotros{
  text-align: justify;
  display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    height: 100vh; 
  }

  h1 {
    font-size: 7vh;
    color: #008dda;
  }

  h2 {
    font-size: 4vh;
    color: black;
  }

  p {
    font-size: 25px;
    color: black;
    max-width: 1000px; 
    margin: 0 20px; 
  }

  img {
    max-width: 60%; 
    height: auto; 
    margin: 20px 0; 
  }
`