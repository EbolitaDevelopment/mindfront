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
  
        // Opcional: Verificar que la cookie esté correctamente establecida
        console.log(document.cookie); // Para depuración
  
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
       
        <p>Tenga en cuenta que al registrarse esta de acuerdo con los<br /> <a href="/terminosycondiciones">términos y  condiciones</a> así 
                como <a href="/politicadeprivacidad">la  política  de privacidad.</a></p> </div>
        <div className="tIS">
          <form id='veriregistro' onSubmit={handleSubmit}>
            <input 
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
            />
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
      </div>
    </Registro>
  )
}

export default Registrar


const Registro = styled.div`
        @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
        .font-style-title {font-family:'League Spartan', sans-serif !important; } 
        .font-style-subtitle {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-heading {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-normalText {font-family: 'League Spartan', sans-serif !important; }
        
        * {
            background-color: #f7eedd;
            font-family: League Spartan;
            margin-left:5%;
            margin-right:5%;
        }
        
        h1 {
            font-size: 7vh;
            color: #008dda;
            text-align: center;
        }
        h2 {
            font-size: 5vh;
            color: black;
            text-align: center;
        }
        p {
            font-size: 2.5vh;
            color: black;
        }
        a{
        color:#008dda;
        text-decoration: none;
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
            margin: 10px 0; /* Espacio entre los inputs */ /* Asegura que el input se comporte como un bloque */
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
            width:25%;
        }
        .iIS{
        width: 100%;
        margin:0;
        border:0;
        }
`