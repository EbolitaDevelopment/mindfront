import React from 'react';
import styled from 'styled-components';  

const Proposito = () => {
  return (
    <Propos>
        <h1>PROPÓSITO</h1>
        <h2>INTRODUCCIÓN</h2>

        <div className="text-content">
            <p>
                Debido al incremento de la tecnología y la reciente pandemia se ha desencadenado una repentina decadencia en cuanto a las interacciones en persona en las nuevas generaciones, y se están incrementando los problemas para socializar ya que algunos desarrollan ciertas inseguridades que los llevan a ser más cerrados a la hora de compartir experiencias y opiniones por el miedo al qué dirán. Dichos problemas a futuro podrían desencadenar grandes trastornos como ansiedad social e inclusive depresión.
            </p>
            <p>
                Aproximadamente el 3% de la población mundial padece de agorafobia, donde la incidencia anual es del 0.3%. De manera general, este trastorno tiene sus inicios habitualmente en la adolescencia y antes de los 30 años. Esta fobia llega a afectar a prácticamente todos los aspectos de la vida de una persona, por ejemplo en casos académicos y laborales a la hora de presentar ideas, complicaciones, dudas o soluciones al exponerse frente a un grupo y en situaciones más simples como lo es hacer amigos y relacionarse con otras personas. El método más eficaz para tratar con la agorafobia es con una terapia de exposición, en la que se dan actividades diarias o semanales al individuo para ir reduciendo progresivamente el miedo a socializar, aunque este depende completamente de la voluntad de superarse que tenga la persona.
            </p>
            <h2>PROPÓSITO</h2>
            <p>
                Al diseñar esta aplicación web se busca ayudar a personas con agorafobia o que simplemente tengan dificultades para socializar, de manera progresiva y por ser no invasivos en cuanto al tratamiento. Está enfocada en la adolescencia, que es donde más casos se llegan a presentar.
            </p>
            <p>
                Consistirá de una serie de actividades las cuales, mediante una guía psicológica por parte de un especialista, ayudará a que los usuarios tengan retos, ya sean físicos o mentales, que fomenten la interacción social de manera gradual. El progreso de la terapia de exposición dependerá completamente del usuario, y se necesitará constancia para obtener resultados.
            </p>
        </div>
        
        <div className="image-content">
            <img src="proposito.png" alt="Propósito imagen"/>
        </div>
    
    </Propos>
  );
};

export default Proposito;

const Propos = styled.div`        
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');

  body {
    margin: 0;
    padding: 0;
    background-color: #f7eedd;
    font-family: 'League Spartan', sans-serif;
    color: rgb(0, 0, 0);
  }

  .image-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  img {
    width: 30%;
    max-width: 300px;
  }

  h1 {
    color: #008dda;
    text-align: center;
    font-size: 2.5em;
    margin: 20px 0;
  }

  h2 {
    color: #f95f5e;
    text-align: center;
    font-size: 2em;
    margin: 15px 0;
  }

  p {
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: justify;
    color: black;
    font-size: 1.1em;
  }

  .text-content {
    width: 90%;
    margin: 0 auto;
  }
`;
