import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Cookies from 'js-cookie';

const Cuenta = () => {
  const [userData, setUserData] = useState(null);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = Cookies.get('jwt');

      if (!token) {
        throw new Error("No se encontró la cookie JWT");
      }
        const response = await fetch('http://localhost:4000/api/datos',{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
             cookie: token
            })
          });
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const result = await response.json();
        setUserData(result.body);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert('Las contraseñas nuevas no coinciden');
      return;
    }

    try {
        const token = Cookies.get('jwt');

      if (!token) {
        throw new Error("No se encontró la cookie JWT");
      }
      const res = await fetch("http://localhost:4000/api/cambiar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          password: passwordData.currentPassword,
          password2: passwordData.newPassword,
          password3: passwordData.confirmNewPassword,
          cookie: token
        })
      });

      const resJson = await res.json();
      if (resJson.redirect) {
        window.location.href = resJson.redirect;
      }
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Hubo un problema al cambiar la contraseña');
    }
  };



  return (
    <Style>
      <div className="content">
        <div className="user-info">
        <img src="logo.png" alt="MINDLOOSE Logo" className="logo" />
          <b><h2>CUENTA</h2></b>
          <p>Vea la información con respecto a su cuenta</p>
          
  
          <div className="user-details">
            <h2>Datos del usuario</h2>
            {userData ? (
              <>

                <p>CORREO: {userData.mail}</p>
                <p>NOMBRE: {userData.nombre}</p>
                <p>CORREO: {userData.apellidopat}</p>
                <p>CORREO: {userData.apellidomat}</p>
              </>
            ) : (
              <p>Cargando datos...</p>
            )}
          </div>
        </div>
  
        <div className="password-change">
          <h2>CAMBIAR CONTRASEÑA</h2>
          <form onSubmit={handlePasswordChange}>
            <input 
              type="password" 
              className="botonesp" 
              placeholder="Ingrese contraseña actual"
              value={passwordData.currentPassword}
              onChange={(e) => setPasswordData(prev => ({...prev, currentPassword: e.target.value}))}
              required
            />
            <input 
              type="password" 
              className="botonesp" 
              placeholder="Ingrese contraseña nueva"
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData(prev => ({...prev, newPassword: e.target.value}))}
              required
            />
            <input 
              type="password" 
              className="botonesp" 
              placeholder="Verifique la nueva contraseña"
              value={passwordData.confirmNewPassword}
              onChange={(e) => setPasswordData(prev => ({...prev, confirmNewPassword: e.target.value}))}
              required
            />
            <button type="submit" className="botonesS">Cambiar Contraseña</button>
          </form>
        </div>
      </div>
    </Style>
  );
  };
  
  export default Cuenta;
  
  const Style = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
  
    * {
      background-color: #f7eedd;
      margin: 0;
      padding: 0;
      box-sizing: border-box;

    align-items: center; /* Alinea verticalmente los elementos */
    }
  
    body {
      font-family: 'League Spartan', sans-serif;
      margin: 0;
    }
  
    h2 {
      font-size: 3.4rem;
      color: #008dda;
      margin-bottom: 20px;
      font-weight: bolder;
    }
  
    p {
      font-size: 1.2rem;
      color: black;
      text-align: justify;
    }
  
    .logo {
      width: 150px;
      margin-top: 20px;
    }
  
    .content {
      display: flex;
      justify-content: space-between;
      margin: 0 5%;
      height:auto;
      min-height: 94vh;
    }
  
    .user-info {
      width: 45%;
      padding-right: 20px;
    }
    .user-info p{
      margin-bottom: 14%;
    }
    .user-details h2 {
    font-size: 2rem;
      color: #008dda;
      margin-bottom: 20px;
    }
  
    .user-details p {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
  
    .password-change {
      width: 60%;
      margin-left: 10%;
    }
    .password-change h2{
    font-size: 2rem;
      text-align: center;
      
    }
  
    .botonesp {
      width: 100%;
      background-color: #ace2e1;
      border: 0;
      margin: 10px 0;
      padding: 8%;
      color: black;
      border-radius: 150px;
      font-size: 1rem;
      text-align: center;
    }
  
    input::placeholder {
      color: BLACK;
      font-size:1.3rem;
      font-family: 'League Spartan', sans-serif;
    }
  
    .botonesS {
      width: 100%;
      background-color: #008dda;
      border: 0;
      margin-top: 20px;
      padding: 8%;
      color: #ace2e1;
      font-size:1.3rem;
      font-family: 'League Spartan', sans-serif;
      border-radius: 150px;
      font-size: 1.2rem;
      cursor: pointer;
    }
    .botonesp:hover {
      color: #008dda;
    }
    .botonesS:hover {
      background-color: #009dda;
      color: #fff;
    }
  
    @media (max-width: 768px) {
      .content {
        flex-direction: column;
        margin: 20px 5%;
      }
  
      .user-info, .password-change {
        width: 100%;
        padding: 0;
        border: none;
        margin-bottom: 30px;
      }
  

  
      .botonesp, .botonesS {
        padding: 12px;
        font-size: 1rem;
      }
    }
  `;
  