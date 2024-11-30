import React, { useState } from 'react'
import styled from 'styled-components'

const Registrar= () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    apellidop: '',
    apellidom: '',
    password: '',
    password2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Realizamos la petición POST al backend
      const res = await fetch("http://localhost:4000/api/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // Parseamos la respuesta en formato JSON
      const resJson = await res.json();
  
      // Si la respuesta es exitosa
      if (resJson.status === "ok") {
        const { token, clave } = resJson.body;
  
        // Establecemos la cookie manualmente en el navegador (aunque el servidor ya la ha establecido con Set-Cookie)
        const expirationTime = new Date(Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRES, 10) * 24 * 60 * 60 * 1000);
        document.cookie = `${clave}=${token}; expires=${expirationTime.toUTCString()}; path=/`;
  
        // Redirigir al usuario si el servidor indica una URL de redirección
        if (resJson.redirect) {
          window.location.href = resJson.redirect;
        }
      } else {
        alert(resJson.message || "Error en el registro");
      }
  
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Hubo un problema con el registro");
    }
  };
  

  return (
    <Registro>
      <div className="central">
        <div className="imagen">
          <h1>CREA TU CUENTA</h1>
          <h2>Regístrate</h2>
          <img src="IMG_1581.png" alt="" />
       
        <p>Tenga en cuenta que al registrarse esta de acuerdo con los <a href="/terminosycondiciones">términos y  condiciones</a> así 
                como <a href="/politicadeprivacidad">la  política  de privacidad.</a></p> </div>
        
          <form id='veriregistro' onSubmit={handleSubmit}><div className="tIS">
            <div><input 
              type="email" 
              name="email"
              className="botonesp" 
              placeholder="Mail"
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              name="name"
              className="botonesp" 
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required 
            />
            </div>
            <div>
            <input 
              type="text" 
              name="apellidop"
              className="botonesp" 
              placeholder="Apellido Paterno"
              value={formData.apellidop}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              name="apellidom"
              className="botonesp" 
              placeholder="Apellido Materno"
              value={formData.apellidom}
              onChange={handleChange}
              required 
            /></div></div>
            <input 
              type="password" 
              name="password"
              className="botonesp" 
              placeholder="Crear Contraseña"
              value={formData.password}
              onChange={handleChange}
              required 
            />
            <input 
              type="password" 
              name="password2"
              className="botonesp" 
              placeholder="Verificar Contraseña"
              value={formData.password2}
              onChange={handleChange}
              required 
            />
            <button 
              className="botonesS" 
              type="submit"
            >
              Crear Cuenta
            </button>
          </form>
        
      </div>
    </Registro>
  )
}

export default Registrar

const Registro = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
  
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
    text-align: justify;
  }

  .imagen {
    margin: 3% 0;
  }

  .central {
    display: grid;
    margin: 0;
    grid-template-columns: 40% 50%; /* Divide el contenedor en dos columnas */
    gap: 10%;
    padding: 0;
    align-items: center;
    height: 100vh;
    width: 80vw;
    text-align: center;
  }

  .central div {
    flex: 1;
  }

  .tIS .botonesp {
    width: 70%;
    background-color: #ace2e1;
    border: 0;
    margin: 10px 0;
    padding: 12%;
    color: black;
    border-radius: 150px;
    font-size: 1rem;
    text-align: center;
  }
    .botonesp {
    width: 82.5%;
    background-color: #ace2e1;
    border: 0;
    margin: 10px 0;
    padding: 7%;
    color: black;
    border-radius: 150px;
    font-size: 1rem;
    text-align: center;
  }

  input::placeholder {
    color: black;
    font-size: 1.3rem;
    font-family: 'League Spartan', sans-serif;
  }

  .botonesS {
    width: 100%;
    background-color: #008dda;
    border: 0;
    margin-top: 20px;
    padding: 8%;
    color: #ace2e1;
    font-size: 1.3rem;
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

  .tIS {
    display: grid;
    grid-template-columns: 50% 50%; /* Define dos columnas de igual tamaño */
    
  }
  form{
  margin-bottom: 2%;
  }

  .tIS input {
    width: 100%;
  }

  a {
    color: #008dda;
    text-decoration: none;
  }
`;
