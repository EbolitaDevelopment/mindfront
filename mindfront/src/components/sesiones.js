import React from 'react'
import styled from 'styled-components';
const Isesion = () => {
  return (
<Styles>
     <div class="central">
    <p><a href='/iniciosesion'>Iniciar sesion</a>   <a href='registro'>Crear Cuenta</a></p>
</div>
</Styles>
  )
}

export default Isesion
const Styles = styled.nav`
.central{
width:100%;
text-align: right;
color: :#008dda;
}
    a {
        color: #008dda; 
        text-decoration: none; 
        font-size: 4vh; 
        padding: 10px 15px; 
    }

p{
margin: 0;
}
.espacio{
width:5%
}
`