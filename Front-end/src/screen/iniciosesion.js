import React,{useState} from 'react'
import styled from 'styled-components'

const Isesion = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
          const res = await fetch("http://localhost:4000/api/isesion", {
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
          alert("Hubo un problema con el inicio de sesión");
        }
      };
          
  return (
    <Sesion>
     <div class="central">

<div class="tIS">
    <h1>INICIA SESIÓN</h1>
    <h2>Ingresa tu cuenta de MINDLOOSE</h2>
    <form id='FISesion' onSubmit={handleSubmit}>
    <input 
    class="botonesp" 
    placeholder="Mail" 
    type="email" 
    name="email"
    className="botonesp" 
    value={formData.email}
    onChange={handleChange}
    required />
    <input 
    type="password" 
    name="password"
    className="botonesp" 
    placeholder="Crear Contraseña"
    value={formData.password}
    onChange={handleChange}
    required />
    <button class="botonesS" type='submit'>Iniciar sesión</button></form>
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
            margin: 0;
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
        
        .central {
            display: grid;
            margin: 0 ;
            grid-template-columns: 40% 40%; /* Divide el contenedor en dos columnas iguales */;
            gap:20%;
            padding: 0;
            align-items: center; /* Alinea verticalmente */
            height: 100vh;
            width: 80vw; /* Ocupa toda la altura de la ventana */
            text-align: center; /* Centra el texto dentro del contenedor */
        }
        
        .central div {
            flex: 1;
        }  
    .botonesp {
      width: 80%;
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
`