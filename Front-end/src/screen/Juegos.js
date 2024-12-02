import React, { useState } from 'react';
import styled from 'styled-components';
import Memorama from '../components/Memoramas';  
import Progreso from '../components/progreso';

const Juegos = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  // Nuevo estado para manejar la navegación
  const [currentScreen, setCurrentScreen] = useState('juegos');

  // Función que cambia el estado de juego y pantalla
  const handleGameSelection = (gameType) => {
    setSelectedGame(gameType);
    setCurrentScreen('memorama');
  };

  // Función para volver a la pantalla de juegos
  const handleBackToGames = () => {
    setCurrentScreen('juegos');
    setSelectedGame(null);
  };

  // Renderizado condicional de pantallas
  const renderScreen = () => {
    switch(currentScreen) {
      case 'juegos':
        return (
          <div className="content">
            <h1>JUEGOS</h1>
            <h2>INTRODUCCIÓN</h2>
            <p className="description">
            Los juegos que vamos a dar buscan mostrar las relaciones entre la agorafobia y sus afecciones en distintas áreas de conocimiento como por ejemplo ; el pánico al hablar en público con una corte no parece ser buena idea verdad? o si un psicólogo con agorafobia lo que de por si es irónico como va a ayudar a un paciente si no puede expresarse adecuadamente, es decir lo que buscamos en esta sección es promover conocimiento sobre la fobia y sus afecciones, pero tambien un poco de contexto científico   .     
            Primero elige que jugaremos hoy:</p>
            <div className='orden'>
              <div className='memorama'>
                <div>
                  <img src="memorama.png" alt="Mindloose logo" />
                </div>
                <div>
                  <h3>MEMORAMA</h3>
                  <button
                    className="botonesS"
                    onClick={() => handleGameSelection('afecciones-cientific')}
                  >
                    Afecciones (vista científica)
                  </button>
                  <button
                    className="botonesS"
                    onClick={() => handleGameSelection('afecciones-social')}
                  >
                    Afecciones (vista social)
                  </button>
                  <button
                    className="botonesS"
                    onClick={() => handleGameSelection('fisica-cerebro')}
                  >
                    Física en el cerebro
                  </button>
                </div>
              </div>
              <div className='progreso'>
                <h3>PROGRESO</h3>
                <Progreso />
              </div>
            </div>
          </div>
        );
      
      case 'memorama':
        return (
          <div style={{
            width:'100%'
          }}>
            <Memorama 
              gameType={selectedGame} 
              onBackToGames={handleBackToGames} 
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Juego>
      {renderScreen()}
    </Juego>
  );
}

export default Juegos;

const Juego = styled.nav`
   @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
        .font-style-title {font-family:'League Spartan', sans-serif !important; } 
        .font-style-subtitle {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-heading {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-normalText {font-family: 'League Spartan', sans-serif !important; }
*{
    background-color: #f7eedd;
}
    .description{
    margin : 0;
    } 
    .orden {
    display: grid;
    grid-template-columns: 46% 46%; /* Divide el contenedor en dos columnas iguales */;
    width: 100%;
    gap: 8%;
    height:auto;
    align-items: center; /* Alinea verticalmente los elementos */
  }
    .memorama {
    padding-top: 10px; 
    display: grid;
    width: 100%;
    height:auto;
    align-items: center; /* Alinea verticalmente los elementos */
    grid-template-columns: 40% 60%; /* Divide el contenedor en dos columnas iguales */;
    }
    
    .progreso{
    padding-top: 10px; 
    width: 100%;
    height:auto;
    align-items: center; /* Alinea verticalmente los elementos */
    
    }.progreso p{
    font-size: 1.9vh;
    }
body{
    padding: 0;
    font-family: League Spartan;
}
h1{
    font-size: 7vh;
    color: #008dda;
    text-align: center;
    margin-bottom: 1%;
}
h2{
margin:0;
    font-size: 4vh;
    color: black;
    text-align: CENTER;
}
h3{
    font-size: 5vh;
    color: #008dda;
    text-align: center;
    margin: 0;

  vertical-align: text-top;
}    
p{
    font-size: 3vh;
    color: black;
    text-align: justify;
    margin-top:0;
}
    canvas{
    height: auto;
    width: 80% ;
    }
.orden2 p {
text-align:center;  
}
.content{
    margin-left: 7%;
    margin-right: 7%;
    justify-content: space-between;
    padding: 0;
    height: 88.4vh;

}
    img{
    width:100%;
    }
.botonesS {
            width: 90%;
            background-color: #ace2e1;
            border: 0;
            margin: 2%;
            padding: 7%;
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