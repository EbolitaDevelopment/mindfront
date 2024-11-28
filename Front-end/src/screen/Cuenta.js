import React from 'react'
import styled from 'styled-components';  // Correct import
const Cuenta = () => {
  return (
    <Style>
    <div class="central">
        
        <div class="imagen">
            
            <h1>Cuenta</h1>
            <h5>Ingresa tu cuenta de MINDLOOSE</h5>
            <center><img src="logo.png" alt="" /></center>
           <center><div class="user-info">
                <h2>Datos del usuario</h2>
                <p><strong>USUARIO:</strong> NOMBRE_USUARIO</p>
                <p><strong>CORREO:</strong></p>
                <p><strong>EDAD:</strong> XX</p>
                <p><strong>NOMBRE:</strong> NOMBRE</p>
              </div></center> 
        </div>

        <div class="tIS">
            
        <center>
            <h5>CAMBIAR CONTRASEÑA</h5>
            <input type="text" class="botonesp"  placeholder="Ingrese contraseña actual" />
            <input type="text" class="botonesp" placeholder="Ingrese contraseña nueva"/> 
            <input type="text" class="botonesp"  placeholder="Verifique la nueva contraseña" />
            <input type="text" class="botonesp" placeholder="Cambiar Contraseña"/>
            <button class="botonesS">Eliminar Cuenta </button>
        </center>
        </div>
        
    </div></Style>
  )
}

export default Cuenta
const Style = styled.nav`
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
    font-size: 80px;
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
.botonesp{
    width: 70%;
    background-color: #ace2e1;
    border: 0;
    margin:10px;
    padding: 5%;
    color:#efb062;
    border-radius: 100px;

    font-size: 25px;
}
input.botonesp::placeholder{
    color:black;
    font-family: League Spartan;
    text-align: center;
}
.botonesS{
    width: 80%;
    background-color:#f95f5e;
    border: 0;
    margin:10px;
    padding: 5%;
    color:black;
    font-family: League Spartan;
    border-radius: 100px;
    font-size: 25px;
    cursor: pointer;
}
.botonesS:hover{
    background-color: #008dda;
    color:black;
}
h5{
    font-size: 20px;
    text-align: center;
    color: #008dda;
}
.imagen{
    vertical-align: middle;
    align-items: center;
}
`;