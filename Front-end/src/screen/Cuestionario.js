import React, { useState } from 'react';
import styled from 'styled-components';

const Cuestionario = () => {
  const [formValues, setFormValues] = useState({
    a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', 
    i: '', j: '', k: '', l: '', m: '', n: '', o: '', p: '', 
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
    const user = getCookie("jwt");
    try {
      const res = await fetch("http://localhost:4000/api/cuestionario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nivel: result.nivel,
          suma: result.suma,
          user: user
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
        <center><p className="subtitle">CUESTIONARIO</p></center>
        <div className="top-section">
          <div className="left-column">
            <div className="description">
              <b>EN EL PRESENTE DOCUMENTO SE EVALUARIA DE MANERA APROXIMADA LA INTENSIDAD DE LA AGORAFOBIA PRESENTADA

              <br/><br/>SECCIÓN 1:</b> Señale con qué frecuencia evita los lugares, o situaciones que se te indican a continuación tomando en cuenta el nivel de malestar que le producen. 
              <br/><br/>
              Utilice la escala y rellene acorde al nivel de malestar que le producen:
             
              <br/><br/>0=no me produce malestar
              <br/>1=me produce poco malestar
              <br/>2=me molesta
              <br/>3=me incomoda bastante
              <br/>4=no lo soporto
            </div>
          </div>

          <div className="right-column">
            <div className="table-container">
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2} className='title'>LUGARES:</td>
                  </tr>
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
                    ['Exterior (ej. campo, calles amplias, patios)', 'l'], 
                    ['Interior (ej. habitaciones grandes, pasillos)', 'm']
                  ].map(([label, id]) => (
                    <tr key={id}>
                      <td width="91%">{label}:</td>
                      <td>
                        <input 
                          type="text" 
                          pattern="[0-4]" 
                          maxLength="1" 
                          required 
                          id={id}
                          value={formValues[id]}
                          onChange={handleInputChange}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bottom-section">
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td colSpan={2} className='title'>SITUACIONES:</td>
                  <td colSpan={2} className='title'>TELETRANSPORTES:</td>
                </tr>
                {[
                  ['Estar en fila', 'n', 'Autobuses', 'o'],
                  ['Cruzar puentes', 'p', 'Trenes', 'q'],
                  ['Caminar por la calle', 'r', 'Metro', 's'],
                  ['Estar en casa solo', 't', 'Aviones', 'u'],
                  ['Estar lejos de casa', 'v', 'Barcos', 'w'],
                  ['Fiestas o encuentros sociales', 'x', 'Conducir o viajar en coche', 'z']
                ].map(([label1, id1, label2, id2]) => (
                  <tr key={`${id1}-${id2}`}>
                    <td width="46%">{label1}</td>
                    <td width="4%">
                      <input 
                        type="text" 
                        pattern="[0-4]" 
                        maxLength="1" 
                        required 
                        id={id1}
                        value={formValues[id1]}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td width="46%">{label2}</td>
                    <td width="4%">
                      <input 
                        type="text" 
                        pattern="[0-4]" 
                        maxLength="1" 
                        required 
                        id={id2}
                        value={formValues[id2]}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="note">
            <p>
              <br/><br/>Indicar el número total de ataques de pánico que se han tenido en los 7 últimos días, teniendo en cuenta que se define un ataque de pánico como un conjunto de las siguientes situaciones:
              <br/><br/>
              (1)Un alto nivel de ansiedad 
              <br/><br/>
              (2)Reacciones corporales intensas (palpitaciones del corazón, sudoración, temblores musculares, mareos, náuseas) 
              <br/><br/>
              (3)Pérdida transitoria de la capacidad de planificar, pensar o razonar 
              <br/><br/>
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
          </div>

          <button type="submit" className="create-account-btn">CREAR CUENTA</button>
        </div>
      </form>
    </Quest>
  );
};

export default Cuestionario;

const Quest = styled.nav`
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .top-section {
    display: flex;
    height: 100vh;

  }

  .left-column, .right-column {
    width: 50%;
    height:100%;
    padding: 10px;
    box-sizing: border-box;
  }

  .bottom-section {
    height: 100vh;
    padding:10px;
  }

  .subtitle {
    color: #f95f5e;
    font-weight: bold;
    font-size:5vh;
    text- align : center
    margin-bottom: 15px;
  }
    .title {
    color: black;
    font-weight: bold;
    font-size:2vh;
    text- align : center
    margin-bottom: 15px;
  }
    }

  .description {
  width:100%
    font-size: 14px;
    margin-bottom: 20px;
    text-align : justify;
    color : black
  }

  .table-container {
    width:100%;
    height:AUTO;
    
    
  }

  table {
    border-radius: 1%;
    width: 100%;
    background-color: #e6eef9;
    color: black;
    font-size: 12px;
  }

  td {
    padding: 8px;
    color: black;
  }

  .create-account-btn {
    background-color: #f95f5e;
    color: black;
    padding: 2%;
    width: 25%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .note {
    font-size: 12px;
    margin: 20px 0;
    color: black;
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

`;
