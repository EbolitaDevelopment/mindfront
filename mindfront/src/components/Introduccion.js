import React from 'react'
import logo from '../img/logo.png'
import styled from 'styled-components'

const Introduccion = () => {
  return (

    <Intro>
     <div class="introduccion">
    <h1>MINDLOOSE</h1>
    <img src={logo} alt="Mindloose logo"/>
    <p>Aplicación diseñada para acompañarte en tu batalla con la agorafobia.</p> 
    <h2>SOBRE NOSOTROS</h2>
    <p>Mindloose es una aplicación web propuesta con el fin de ayudar a personas con pánico social o agorafobia mediante una terapia de exposición.</p>
    <p>Esta aplicación está diseñada por alumnos del Instituto Politécnico Nacional de la unidad CECYT9 "Centro de Estudios Científicos y Tecnológicos </p>
    </div>
    
    </Intro>
  )
}

export default Introduccion

const Intro = styled.div`

    background-color: #b0c4de;
    introduccion {
      padding: 30px;
      text-align: center;
      width:150vh;  
      }
      
    h1 {
      margin:0;
      font-size: 3em;
      color: #ff9900;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 2em;
      color: #333;
      margin-bottom: 10px;
    }

    p {
      line-height: 1.6;
      margin-bottom: 20px;
    }

    img {
      width: 200px;
      height: auto;
      margin-bottom: 20px;
    }

    .footer {
      margin-top: 30px;
      font-size: 0.8em;
      color: #666;
    }


 
`