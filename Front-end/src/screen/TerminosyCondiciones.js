import React from 'react'
import styled from 'styled-components';  
const Politicadeprivacidad = () => {
  return (
    <Politica>
        <h1>Politica de privacidad</h1>
    

        <div className="text-content">
            <p>
            Bienvenido a MINDLOOSE, una plataforma en línea diseñada para proporcionar retos diarios destinados a ayudar a aquellos que enfrentan la agorafobia. Antes de utilizar nuestros servicios, por favor lee detenidamente los siguientes términos y condiciones de uso. Al acceder o utilizar nuestro sitio web, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor abstente de utilizar nuestros servicios.
</p>
<p>1. Uso de los Servicios:
 - MINDLOOSE ofrece retos diarios y recursos destinados a ayudar a las personas a enfrentar la agorafobia. Al utilizar nuestros servicios, aceptas hacerlo únicamente con fines personales y no comerciales.
</p>
<p>2. Registro de Usuarios:
 - Al registrarte enMINDLOOSE, aceptas proporcionar información precisa y actualizada sobre ti mismo.
 - Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y aceptas notificarnos de inmediato cualquier uso no autorizado de tu cuenta.
</p>
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
        
        <div className="image-content">
        </div>
    
    </Politica>
  );
};

export default Politicadeprivacidad;

const Politica = styled.div`        
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

  p {
    line-height: 1.2;
    margin-bottom: 14px;
    text-align: justify;
    color: black;
    font-size: 0.8em;
  }

  .text-content {
    width: 100%;
    margin: 0 auto;
    height: 100vh;
  }
`;