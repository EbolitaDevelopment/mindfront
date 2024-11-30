import React, { useState } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const Cuestionario = () => {
  const [formValues, setFormValues] = useState({
    a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', 
    i: '', j: '', k: '', l: '', n: '', o: '', p: '', 
    q: '', r: '', s: '', t: '', u: '', v: '', w: '', x: '', 
    y: '', z: ''
  });

  const validateInput = (value) => {
    return value === '' || (parseInt(value) >= 0 && parseInt(value) <= 4);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    
    if (value === '' || (value.length === 1 && validateInput(value))) {
      setFormValues(prev => ({
        ...prev,
        [id]: value
      }));
    } else {
      alert("Por favor, ingrese un valor entre 0 y 4");
    }
  };

  const calculateLevel = (values) => {
    const numValues = Object.values(values).map(val => val === '' ? 0 : parseInt(val));
    
    const suma = numValues.slice(0, -1).reduce((a, b) => a + b, 0) + (numValues[numValues.length - 1] * 5);
    
    let nivel;
    if (suma > 125) {
      alert("Deberías consultar la sección de impacto y canalización ya que no podemos tratarte");
      return null;
    } else if (suma >= 0 && suma < 30) {
      nivel = 1;
    } else if (suma >= 30 && suma < 60) {
      nivel = 2;
    } else if (suma >= 60 && suma < 90) {
      nivel = 3;
    } else if (suma >= 90 && suma < 115) {
      nivel = 4;
    } else if (suma >= 115 && suma < 125) {
      nivel = 5;
    }

    return { nivel, suma };
  };

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


  const handleSubmit = async (e) => {
    e.preventDefault();

    const allFilled = Object.values(formValues).every(val => val !== '');
    if (!allFilled) {
      alert("Por favor, complete todos los campos");
      return;
    }

    const result = calculateLevel(formValues);
    if (!result) return;
    
    try {
      
        const token = Cookies.get('jwt');

      if (!token) {
        throw new Error("No se encontró la cookie JWT");
      }
      const res = await fetch("http://localhost:4000/api/cuestionario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nivel: result.nivel,
          suma: result.suma,
          cookie: token
        })
      });

      const resJson = await res.json();
      if (resJson.redirect) {
        window.location.href = resJson.redirect;
      }
    } catch (error) {
      console.error("Error al obtener el progreso:", error);
      alert("Hubo un error al enviar el cuestionario");
    }
  };

  return (
    <Quest>
      <form onSubmit={handleSubmit} className="wrapper">
        <h1>CUESTIONARIO</h1>
        <div className="top-section">
          <p className='subtitle'>
            EN EL PRESENTE DOCUMENTO SE EVALUARA DE MANERA APROXIMADA LA INTENSIDAD DE LA AGORAFOBIA PRESENTADA
          </p>
          <p>
            SECCIÓN 1: Señale con qué frecuencia evita los lugares, o situaciones que se te indican a continuación tomando en cuenta el nivel de malestar que le producen.
            utilice la siguiente escala :
          </p>
          <p><table>
          <td>
            0=no me produce malestar</td>
            <td>1=me produce poco malestar</td>
            <td>2=me molesta</td>
            <td>3=me incomoda bastante</td>
            <td>4=no lo soporto</td></table></p>
          </div>
          <div className="content">
          
            <div>
                <p className="title">LUGARES:</p>
                {[
                  ['Grandes almacenes', 'a'],
                  ['Bares y restaurantes', 'b'],
                  ['Cines', 'c'],
                  ['Teatros', 'd'],
                  ['Supermercados', 'e'],
                  ['Clases', 'f'],
                  ['Restaurantes', 'g'],
                  ['Museos', 'h'],
                  ['Ascensores', 'i'],
                  ['Auditorios o estadios', 'j'],
                  ['Aparcamientos o garajes', 'k'],
                  ['Exterior (ej. campo, calles amplias, patios)', 'l']
                ].map(([label, id]) => (
                  <p key={id}>
                    {label}:
                    <input
                      type="text"
                      pattern="[0-4]"
                      maxLength="1"
                      required
                      id={id}
                      value={formValues[id]}
                      onChange={handleInputChange}
                    />
                  </p>
                ))}
              </div>
              <div>
              <p className="title">SITUACIONES:</p>
              <p>
                {[
                  ['Estar en fila', 'n'],
                  ['Cruzar puentes', 'p'],
                  ['Caminar por la calle', 'r'],
                  ['Estar en casa solo', 't'],
                  ['Estar lejos de casa', 'v'],
                  ['Fiestas o encuentros sociales', 'x']
                ].map(([label, id]) => (
                  <p key={id}>
                    {label}:
                    <input
                      type="text"
                      pattern="[0-4]"
                      maxLength="1"
                      required
                      id={id}
                      value={formValues[id]}
                      onChange={handleInputChange}
                    />
                  </p>
                ))}
              </p>
              </div>
              <div>
              <p className="title">TELETRANSPORTES:</p>
              <p>
                {[
                  ['Autobuses', 'o'],
                  ['Trenes', 'q'],
                  ['Metro', 's'],
                  ['Aviones', 'u'],
                  ['Barcos', 'w'],
                  ['Conducir o viajar en coche', 'z']
                ].map(([label, id]) => (
                  <p key={id}>
                    {label}:
                    <input
                      type="text"
                      pattern="[0-4]"
                      maxLength="1"
                      required
                      id={id}
                      value={formValues[id]}
                      onChange={handleInputChange}
                    />
                  </p>
                ))}
              </p>
             </div>
            </div>
            <p>
              <br /><br />Indicar el número total de ataques de pánico que se han tenido en los 7 últimos días, teniendo en cuenta que se define un ataque de pánico como un conjunto de las siguientes situaciones:
              <br /><br />
              (1)Un alto nivel de ansiedad
              <br /><br />
              (2)Reacciones corporales intensas (palpitaciones del corazón, sudoración, temblores musculares, mareos, náuseas)
              <br /><br />
              (3)Pérdida transitoria de la capacidad de planificar, pensar o razonar
              <br /><br />
              (4)Un intenso deseo de escapar o huir de la situación. (Esta última característica es lo que diferencía el ataque de pánico de los altos niveles de ansiedad o miedo).
              <input
                type="text"
                pattern="[0-4]"
                maxLength="1"
                required
                id="y"
                value={formValues.y}
                onChange={handleInputChange}
              />
            </p>
         
  
          <button type="submit" className="create-account-btn">CREAR CUENTA</button>
       
      </form>
    </Quest>
  );}
  

export default Cuestionario;

const Quest = styled.nav`
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
    table{
    margin:0;
    width:100%;
    text-align:center;
    font-weight: bolder;
    color: #008dda;
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
    font-size: 2.7vh;
    color: black;
    text-align: justify;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
}
.content{
  height:88.7vh;

    display: grid;
    grid-template-columns: 33% 33% 33%; /* Divide el contenedor en dos columnas iguales */;
    gap:8%;
    }
    .content div {
  margin :0;
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

input {
    border-radius: 50%;  
    font-weight: bold;
    width: 100%; 
    max-width :  20px;      
    aspect-ratio: 1;     
    background-color: #f7eedd;
    border: 2px solid #b3c6e7;
    color: black;
    text-align: center;
}
.subtitle{
  font-weight: bolder;
  text-align: center;
  
}

`;
