
import React from 'react'
import styled from 'styled-components';  
const Politicadeprivacidad = () => {
  return (
    <Politica>
      <div className='content'>
        <h1>Politica de privacidad</h1>
    

        <div className="text-content">
            <p>
            Bienvenido a MINDLOOSE, una plataforma en línea diseñada para proporcionar retos diarios destinados a ayudar a aquellos que enfrentan la agorafobia. Antes de utilizar nuestros servicios, por favor lee detenidamente los siguientes términos y condiciones de uso. Al acceder o utilizar nuestro sitio web, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor abstente de utilizar nuestros servicios.
</p>
<p>1. Información que recopilamos:
- Para utilizar nuestro programa Insecure Mind, solo recopilamos la información que usted ingresa voluntariamente en nuestra plataforma. Esto puede incluir su nombre,  edad ,sexo y otra información relevante que usted decida proporcionar.
</p>
<p>2. Uso de la información:
- La información que recopilamos se utiliza únicamente para facilitar la ubicación de su usuario en nuestra base de datos para asi proporcionar un mejor servicio. Esto significa que utilizamos sus datos personales para identificar y acceder a la información que usted ha proporcionado, con el objetivo de mejorar su experiencia dentro de nuestra plataforma.</p>
<p>3. Privacidad:
 - MINDLOOSE respeta la privacidad de sus usuarios y se compromete a proteger la información personal proporcionada.
 - Solo recopilamos y utilizamos datos proporcionados por los usuarios con el fin de mejorar nuestros servicios y agilizar la localización de los mismos.
</p>

<p>4. Propiedad Intelectual:
 - Todos los contenidos disponibles enMINDLOOSE, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes y software, están protegidos por derechos de autor y otras leyes de propiedad intelectual.
 - No puedes copiar, distribuir, modificar, transmitir, o usar de cualquier manera los contenidos de MINDLOOSE sin el consentimiento previo por escrito de la empresa.
</p>
<p>5. Responsabilidad del Usuario:
 - Eres responsable de tu uso de los servicios de MINDLOOSE, incluyendo cualquier contenido que publiques o compartas a través de la plataforma.
 - No debes utilizar nuestros servicios de manera que pueda causar daño, interrupción o perjuicio a MINDLOOSE, a otros usuarios, o a terceros.
</p>
<p>6. Limitación de Responsabilidad:
 - MINDLOOSE no se hace responsable de cualquier daño directo, indirecto, incidental, especial, consecuente o punitivo que pueda surgir del uso o la imposibilidad de utilizar nuestros servicios.
</p>
<p>7. Modificaciones de los Términos y Condiciones:
 - MINDLOOSE se reserva el derecho de modificar o actualizar estos términos y condiciones en cualquier momento sin previo aviso.
 - Se te notificará de cualquier cambio a través de nuestra plataforma, y tu continuo uso de nuestros servicios constituirá tu aceptación de dichos cambios.
Al utilizar los servicios de MINDLOOSE, aceptas cumplir con estos términos y condiciones. Si tienes alguna pregunta o inquietud sobre estos términos, por favor contáctanos a través de nuestra página de contacto.</p>
        </div>
        
        </div>
    
    </Politica>
  );
};

export default Politicadeprivacidad;

const Politica = styled.div`        
 @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');

*{
    background-color: #f7eedd;
}
    .content{
    padding: 0;
    font-family: League Spartan;
    margin-left: 7%;
    margin-right: 7%;
    justify-content: space-between;
    padding: 0;
    height: 89vh;

}
    .description{
    margin : 0;
    } 
    .orden {
    padding-top: 3%; 
    display: grid;
    grid-template-columns: 50% 50%; /* Divide el contenedor en dos columnas iguales */;
    width: 100%;
    height:auto;
    align-items: center; /* Alinea verticalmente los elementos */
  }
    .orden2 {
    padding-top: 10px; 
    display: grid;
    grid-template-columns: 40% 60%; /* Divide el contenedor en dos columnas iguales */;
    width: 100%;
    height:auto;
    align-items: center; /* Alinea verticalmente los elementos */
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
 
p{
    font-size: 2.8vh;
    color: black;
    text-align: justify;
}
`;