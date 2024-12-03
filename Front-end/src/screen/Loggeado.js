import React from 'react';
import styled from 'styled-components';  

const loggeado = () => {
  return (
    <LoggedIN>
   <div className="contenedor-principal">
            <div className="logo-container">
                <img src="logoML.png" alt="Logo Mindloose" />
            </div>
            <h2>ACCESO RESTRINGIDO</h2>
            <p>Esta sección requiere que tengas una sesión activa. <br/>Por favor, inicia sesión o crea una cuenta para continuar.</p>
        </div>     </LoggedIN>
  );
};

export default loggeado;

const LoggedIN = styled.nav`        
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
*{
background-color: #f7eedd;
font-family: 'League Spartan', sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
    .contenedor-principal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height:89vh;
        max-width: 1200px;
        padding: 20px;
    }

    .logo-container {
        width: 200px;
        margin: 20px auto;
        display: flex;
        justify-content: center;
    }

    .logo-container img {
        width: 100%;
        height: auto;
        display: block;
        margin-bottom: 20%;
    }

    h2 {
        color:  #008dda;
        font-size: 7vh;
        margin: 0;
    }

    p {
        color:rgb(0, 0, 0);
        font-size: 3vh;
        margin: 10px 0;
`   