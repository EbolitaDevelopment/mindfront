import React from 'react'
import styled from 'styled-components'

const Isesion = () => {
  return (
    <Sesion>
     <div class="central">

<div class="tIS">
    <h1>INICIA SESIÓN</h1>
    <h2>Ingresa tu cuenta de MINDLOOSE</h2>
    <input type="text" class="botonesp" placeholder="Mail" />
    <input type="text" class="botonesp" placeholder="Contraseña" />
    <a href='/procesocompleto'><button class="botonesS">Iniciar sesión</button></a>
    
</div>

<div class="imagen">
    <img src="IMG_1581.png" alt="" />
</div>

</div>
    </Sesion>
  )
}

export default Isesion

const Sesion= styled.div
`@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
        .font-style-title {font-family:'League Spartan', sans-serif !important; } 
        .font-style-subtitle {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-heading {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-normalText {font-family: 'League Spartan', sans-serif !important; }
        
        * {
            background-color: #f7eedd;
            font-family: League Spartan;
        }
        
        h1 {
            font-size: 7vh;
            color: #008dda;
            text-align: center;
        }
        h2 {
            font-size: 4vh;
            color: black;
            text-align: center;
        }
        p {
            font-size: 25px;
            color: black;
        }
        
        .principal {
            display: flex;
            justify-content: space-between;
            padding: 0;
        }
        
        .contenedor {
            width: 45%;
            display: flex;
            justify-content: space-around;
        }
        
        .centro {
            vertical-align: middle;
        }
        
        .central {
            display: flex;
            justify-content: space-around;
            padding: 0;
            align-items: center; /* Alinea verticalmente */
            height: 100vh;
            width: 100vw; /* Ocupa toda la altura de la ventana */
            text-align: center; /* Centra el texto dentro del contenedor */
        }
        
        .central div {
            flex: 1;
        }
        
        .botonesp {
            width: 60%;
            background-color: #ace2e1;
            border: 0;
            padding: 25px;
            color: black;
            border-radius: 100px;
            font-size: 25px;
            margin: 10px 0; /* Espacio entre los inputs */
            display: block; /* Asegura que el input se comporte como un bloque */
            margin-left: auto; /* Centra el input horizontalmente */
            margin-right: auto; /* Centra el input horizontalmente */
        }
        
        input.botonesp::placeholder {
            color: black;
            font-family: League Spartan;
            text-align: center;
        }
        
        .botonesS {
            width: 70%;
            background-color: #f95f5e;
            border: 0;
            padding: 30px;
            color: white;
            font-family: League Spartan;
            border-radius: 100px;
            font-size: 25px;
            cursor: pointer;
            display: block; /* Asegura que el botón se comporte como un bloque */
            margin-left: auto; /* Centra el botón horizontalmente */
            margin-right: auto; /* Centra el botón horizontalmente */
        }
     
        .imagen {
            vertical-align: middle;
            align-items: right;
            width:25%
        }
        .iIS{
        width: 75%;
        }
        *{
        text-decoration:none;
        }
`