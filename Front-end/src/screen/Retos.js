import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styled from 'styled-components';
import Progreso from '../components/progreso';

      const ChallengeTracker = () => {
        const [challenges, setChallenges ] = useState([]);
      
        const setCookie = (name, value, days) => {
          const date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          const expires = "expires=" + date.toUTCString();
          document.cookie = `${name}=${value};${expires};path=/`;
        };
      
        const getCookie = (name) => {
          const nameEQ = name + "=";
          const ca = document.cookie.split(';');
          for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
          }
          return null;
        };
      
        const fetchChallenges = async () => {
          try {
            const token = Cookies.get('jwt');

      if (!token) {
        throw new Error("No se encontró la cookie JWT");
      }

      const response = await fetch("http://localhost:4000/api/retos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cookie: token }),
      });
            if (!response.ok) {
              alert("Hubo un error en la consulta de los retos");
              return [];
            }
            const reto = await response.json();
            const reto1 = reto.descripcion;
            return reto1.split("'");
          } catch (error) {
            console.error("Error fetching challenges:", error);
            return [];
          }
        };
        
          const loadChallenges = async () => {
            const cookie = getCookie('retos');
            let retos = null;
        
            if (cookie) {
              try {
                retos = JSON.parse(cookie);
              } catch (e) {
                console.error('Error parsing cookie:', e);
              }
            }
        
            const now = new Date().getTime();
            const expiryTime = 7 * 24 * 60 * 60 * 1000;
        
            if (!retos || now - retos.timestamp > expiryTime) {
              const retoArray = await fetchChallenges();
              retos = { data: retoArray, timestamp: now, expire: now + expiryTime };
              setCookie('retos', JSON.stringify(retos), 7);
            }
        
            const processedChallenges = [];
            if (retos.data.length > 0) {
              for (let i = 1; i < retos.data.length; i += 2) {
                console.log(retos.data[i]);
                if (retos.data[i] === null) {
                  processedChallenges.push({
                    id: Math.floor(i / 2) + 1,
                    text: 'Ya has completado este reto',
                    completed: true,
                  });
                } else {
                  processedChallenges.push({
                    id: Math.floor(i / 2) + 1,
                    text: retos.data[i],
                    completed: false,
                  });
                }
              }
            }
        
            setChallenges(processedChallenges);
          };
        
          const handleChallengeSubmit = async (e) => {
            e.preventDefault();
        
            const confirm = window.confirm('Seguro que quieres marcar los retos como completados?');
            if (confirm === false) return;
        
            const completedChallenges = challenges.filter(
              (challenge) => e.target[`reto${challenge.id}`]?.checked
            );
        
            if (completedChallenges.length === 0) return;
        
            const completedChallengeTexts = completedChallenges
              .map((challenge) => challenge.text)
              .join('*');
            const token = Cookies.get('jwt');
        
            if (!token) {
              throw new Error('No se encontró la cookie JWT');
            }
            try {
              const res = await fetch('http://localhost:4000/api/update', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  retos: completedChallengeTexts,
                  valor: completedChallenges.length,
                  cookie: token,
                }),
              });
        
              if (res.ok) {
                const cookie = getCookie('retos');
                let retos = null;
        
                if (cookie) {
                  try {
                    retos = JSON.parse(cookie);
                  } catch (e) {
                    console.error('Error parsing cookie:', e);
                  }
                }
        
                if (retos && retos.data) {
                  const completedTexts = completedChallengeTexts.split('*');
        
                  for (let i = 1; i < retos.data.length; i += 2) {
                    for (let j = 0; j < completedTexts.length; j++) {
                      if (retos.data[i] === completedTexts[j]) {
                        retos.data[i] = undefined;
                        console.log(`El reto ${completedTexts[j]} ha sido eliminado`);
                      }
                    }
                  }
        
                  document.cookie = 'retos=; path=/ ; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                  setCookie('retos', JSON.stringify(retos), 7);
                }
        
                await loadChallenges();
              }
            } catch (error) {
              alert('Error al actualizar los datos: ' + error.message);
            }
          };
        
          useEffect(() => {
            loadChallenges();
          }, []);
        
          return (
            <Retos>
              <div className="content">
                <h1>RETOS</h1>
                <form id="uProgreso" onSubmit={handleChallengeSubmit}>
                  {challenges.map((challenge) => (
                    <div
                      key={challenge.id}
                      className={`flex items-center mb-2 ${challenge.completed ? 'line-through text-gray-500' : ''}`}
                    >
                      <p className="text-lg flex-grow">
                        RETO {challenge.id} → {challenge.text}
                        {/* Renderiza el checkbox solo si el reto no está completado */}
                        {!challenge.completed && (
                          <input
                            type="checkbox"
                            id={`reto${challenge.id}`}
                            name={`reto${challenge.id}`}
                            className="ml-2"
                          />
                        )}
                      </p>
                    </div>
                  ))}
                  <button type="submit" >
                    MARCAR RETOS COMO COMPLETADOS
                  </button>
                </form>
              </div>
              <div className="content">
                <h1 style={{ paddingTop: '5%' }}>PROGRESO</h1>
                <div className="progreso">
                  <Progreso />
                </div>
              </div>
            </Retos>
          );
        };
        
        export default ChallengeTracker;
        
     
const Retos = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
        .font-style-title {font-family:'League Spartan', sans-serif !important; } 
        .font-style-subtitle {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-heading {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-normalText {font-family: 'League Spartan', sans-serif !important; }
*{
    background-color: #f7eedd;
    font-family: League Spartan;
}

h1{
    font-size: 7vh;
    color: #008dda;
    text-align: center;
    margin-bottom: 1%;
}
p{
    font-size: 25px;
    color: black;
    text-align: justify;
}

.content{
    width: 86%;
    margin-left: 8%;
    margin-right: 8%;
    justify-content: space-around ;
    height: 90vh;
}

.progreso{
  width: 86%;
    margin-left: 8%;
    margin-right: 8%;
    justify-content: space-around ;
    padding: 1%;
height: 80%;
    display: grid;
    align-items: center; /* Alinea verticalmente los elementos */
    grid-template-columns: 40% 60%; /* Divide el contenedor en dos columnas iguales */;
    }
  canvas{
  width: 100%;
  height: 100%;
  }
  button{
            width: 30%;
            background-color: #ace2e1;
            border: 0;
            margin: 2%;
            padding: 3%;
            color: #008dda;
            font-family: League Spartan;
            border-radius: 100px;
            font-size: 3.3vh;
            cursor: pointer;
            display: block; /* Asegura que el botón se comporte como un bloque */
            margin-left: auto; /* Centra el botón horizontalmente */
            margin-right: auto; /* Centra el botón horizontalmente */
        }
    button:hover {
    background-color: #008dda;
    color: #ace2e1;
  }
`;