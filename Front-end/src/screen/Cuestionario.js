import React, { useState } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const Cuestionario = () => {
  const [formValues, setFormValues] = useState({
    a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', 
    i: '', j: '', k: '', l: '', m:'' , n: '', o: '', p: '', 
    q: '', r: '', s: '', t: '', u: '', v: '', w: '', x: '', 
    y: ''
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
  <div className='incisos'>
    <p className="title">LUGARES:</p>
    {[
      ['Bares y restaurantes', 'a'],
      ['Cines', 'b'],
      ['Supermercados', 'c'],
      ['Salón de clases', 'd'],
      ['Restaurantes', 'e'],
      ['Ascensores', 'f'],
      ['Auditorios o estadios', 'g'],
      ['Aparcamientos o garajes', 'h']
    ].map(([label, id]) => (
      <div key={id} className="input-container">
        <p>{label}:</p>
        <input
          type="text"
          pattern="[0-4]"
          maxLength="1"
          required
          id={id}
          value={formValues[id]}
          onChange={handleInputChange}
        />
      </div>
    ))}
  </div>

  <div className='incisos'>
    <p className="title">SITUACIONES:</p>
    {[
      ['Estar en una fila', 'i'],
      ['Cruzar puentes altos', 'j'],
      ['Caminar por la calle', 'k'],
      ['Conversación incómoda', 'l'],
      ['Estar lejos de casa', 'm'],
      ['Encuentros sociales', 'n'],
      ['Platica con desconocido', 'o'],
      ['Exponer ante un público', 'p']
    ].map(([label, id]) => (
      <div key={id} className="input-container">
        <p>{label}:</p>
        <input
          type="text"
          pattern="[0-4]"
          maxLength="1"
          required
          id={id}
          value={formValues[id]}
          onChange={handleInputChange}
        />
      </div>
    ))}
  </div>

  <div className='incisos'>
    <p className="title">TRANSPORTES:</p>
    {[
      ['Autobuses', 'q'],
      ['Trenes', 'r'],
      ['Metro', 's'],
      ['Aviones', 't'],
      ['Barcos', 'u'],
      ['Coches', 'v'],
      ['Bicicletas','w'],
      ['Barcos','x']
    ].map(([label, id]) => (
      <div key={id} className="input-container">
        <p>{label}:</p>
        <input
          type="text"
          pattern="[0-4]"
          maxLength="1"
          required
          id={id}
          value={formValues[id]}
          onChange={handleInputChange}
        />
      </div>
    ))}
  </div>


            </div>
            <div>
            <p>
              Indicar el número total de ataques de pánico que se han tenido en los 7 últimos días, teniendo en cuenta que se define un ataque de pánico como un conjunto de las siguientes situaciones:
            
            <p className='bottom-section'>
              <ul>
              <li>(1)Un alto nivel de ansiedad</li>
              <li>(2)Reacciones corporales intensas (palpitaciones del corazón, sudoración, temblores musculares, mareos, náuseas)</li>
              <li>(3)Pérdida transitoria de la capacidad de planificar, pensar o razonar</li>
              <li>(4)Un intenso deseo de escapar o huir de la situación. (Es lo que diferencía el ataque de pánico de los altos niveles de ansiedad o miedo)</li>
              </ul></p>
              <p className='ataques'>Numero de ataques de pánico: 
              <input
                type="text"
                maxLength="1"
                required
                id="y"
                value={formValues.y}
                onChange={handleInputChange}
              /></p>
            </p>
         
  
          <button type="submit" className="create-account-btn">CREAR CUENTA</button>
       </div>
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
    font-family: League Spartan;
}
    table{
    margin:0;
    width:100%;
    font-weight: bolder;
    color: #008dda;
    }

h1{
    font-size: 7vh;
    color: #008dda;
    text-align: center;
    margin-bottom: 1%;

}
    h2{
    font-size: 5vh;
    color: #008dda;
    text-align: left;
    margin-bottom: 1%;

}
p{
    font-size: 3vh;
    color: black;
    text-align: justify;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
}
.content{
    display: grid;
    grid-template-columns: 30% 30% 30%; /* Divide el contenedor en dos columnas iguales */;
    gap:5%;
    margin: 5% ;
    }
.input-container{
    
    display: grid;
    grid-template-columns: 70% 30%; /* Divide el contenedor en dos columnas iguales */;
    gap:2%;
    align-items: center;
}
.input-container p , input{
    margin: 3% 0;
    font-size: 2vh;
    text-align: justify;
}
.ataques{
padding: 0.5% 0;
    input{
      margin:0 2%;
    } 
}

.content div {
  margin :0;
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
  td{
  padding-right: 1%;
  font-size: 2.4vh;
  }
.title{
font-weight: bold;
margin: 4% 0;
}
.bottom-section{
  font-size: 2vh;
  color: #008dda;
  font-weight: bold;
}
ul, li{
margin: 0 ;
padding: 0.5% 0;
list-style: none;
}
button{
    width: 40%;
    background-color: #008dda;
    border: 0;
    margin: 2% 30%;
    padding: 4%;
    color: #ace2e1;
    font-size: 3.5vh;
    font-family: 'League Spartan', sans-serif;
    border-radius: 150px;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
