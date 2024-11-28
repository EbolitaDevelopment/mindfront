import React from 'react'
import styled from 'styled-components';
const Isesion = () => {
  return (
<Styles>
     <div class="central">
    <p><a href='/iniciosesion'>INICIAR SESIÓN</a>   <a href='registro'>CREAR SESIÓN</a></p>
</div>
</Styles>
  )
}

export default Isesion
const Styles = styled.nav`
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
        .font-style-title {font-family:'League Spartan', sans-serif !important; } 
        .font-style-subtitle {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-heading {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-normalText {font-family: 'League Spartan', sans-serif !important; }
        
        * {
            font-family: League Spartan;
        }
.central{
width:100%;
text-align: right;
color: :#008dda;
}

a {
color: #008dda; 
font-weight: bolder;
text-decoration: none; 
font-size: 4vh; 
 padding: 15px ; 
}

p{
margin: 10px;
}
.espacio{
width:5%
}
`