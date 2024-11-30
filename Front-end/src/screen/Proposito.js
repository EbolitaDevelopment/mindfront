import React from 'react';
import styled from 'styled-components';  

const Proposito = () => {
  return (
    <Propos>
      <div style={{height:'88.9vh'}}>
        <h1>PROPÓSITO</h1>
        
            <p><b>INTRODUCCIÓN: </b>
                Debido al incremento de la tecnología y la reciente pandemia se ha desencadenado una repentina decadencia en 
                cuanto a las interacciones en persona en las nuevas generaciones, y se están incrementando los problemas para 
                socializar ya que algunos desarrollan ciertas inseguridades que los llevan a ser más cerrados a la hora de 
                compartir experiencias y opiniones por el miedo al qué dirán. Dichos problemas a futuro podrían desencadenar 
                grandes trastornos como ansiedad social e inclusive depresión.<br/><br/>
                Aproximadamente el 3% de la población mundial padece de agorafobia, donde la incidencia anual es del 0.3%. 
                De manera general, este trastorno tiene sus inicios habitualmente en la adolescencia y antes de los 30 años. 
                Esta fobia llega a afectar a prácticamente todos los aspectos de la vida de una persona, por ejemplo en casos 
                académicos y laborales a la hora de presentar ideas, complicaciones, dudas o soluciones al exponerse frente a 
                un grupo y en situaciones más simples como lo es hacer amigos y relacionarse con otras personas. El método más 
                eficaz para tratar con la agorafobia es con una terapia de exposición, en la que se dan actividades diarias o 
                semanales al individuo para ir reduciendo progresivamente el miedo a socializar, aunque este depende 
                completamente de la voluntad de superarse que tenga la persona.
                </p>
                <div className='content'><div>
                <p><b>PROPÓSITO: </b>
            
                Al diseñar esta aplicación web se busca ayudar a personas con agorafobia o que simplemente tengan dificultades 
                para socializar, de manera progresiva y por ser no invasivos en cuanto al tratamiento. Está enfocada en la 
                adolescencia, que es donde más casos se llegan a presentar.
                Consistirá de una serie de actividades las cuales, mediante una guía psicológica por parte de un especialista, 
                ayudará a que los usuarios tengan retos, ya sean físicos o mentales, que fomenten la interacción social de manera 
                gradual. El progreso de la terapia de exposición dependerá completamente del usuario, y se necesitará constancia 
                para obtener resultados.
            </p></div>
        
        
        <div>
            <img src="proposito.png" alt="Propósito imagen"/>
        </div></div></div>
    
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
  img {
    width: 100%;
    height:100%;
    margin:0;
    
  }

*{
    background-color: #f7eedd;
    margin-right:5%;
    margin-left:5%;
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
    font-size: 25px;
    color: black;
    text-align: center;
    margin-bottom: 0;

}
p{
    font-size: 2.8vh;
    color: black;
    text-align: justify;
    margin-bottom: 0;
}
b{
margin :0;
}
.content{
    display: grid;
    width: 90%;
    height:auto;
    align-items: center; /* Alinea verticalmente los elementos */
    vertical-align: center;
    grid-template-columns: 70% 30%; /* Divide el contenedor en dos columnas iguales */;
    margin:0;
    margin-left: 5%;
    }
    .content p{
    margin-left:0;
    margin-right:3%;
    }
div{
margin:0;
}
`;
