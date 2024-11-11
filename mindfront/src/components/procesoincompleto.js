import React from 'react';
import styled from 'styled-components';  

const Pincompleto = () => {
  return (
    <Incompleto>
        <div className="contenedor-principal">
            <div className="logo-container">
                <img src="IMG_1581.png" alt="Logo Mindloose" />
            </div>
            <h2>PROCESO INCOMPLETO</h2>
        <p>Hubo complicaciones para realizar la peticion.</p>
        </div>
    </Incompleto>
  );
};

export default Pincompleto;

const Incompleto = styled.nav`        
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');

    body {
        margin: 0;
        padding: 0;
        height: 90vh;
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
        height:87vh;
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
    }

    h2 {
        color:  #008dda;
        font-size: 2.5em;
        margin: 20px 0;
    }

    p {
        color:rgb(0, 0, 0);
        font-size: 1.2em;
        margin: 10px 0;
`   