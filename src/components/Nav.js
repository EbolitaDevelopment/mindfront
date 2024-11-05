import React from 'react'
import style from 'styled-components';
import { Button } from './Button';
const Nav = () => {
  return (
      <Navar>
        <Button/>
        <h2> iniciar sesion</h2> <h2>registrarse</h2>
        <div className='lista'>
          <a href='/'>Proposito</a>
          <a href='/'>Retos</a>
          <a href='/'>Juegos</a>
          <a href='/'>Canalizacion</a>
          <a href='/'>Cuenta</a>
        </div>
      </Navar>
  )
}

export default Nav

const Navar = style.nav`
  h2{
    color: white;
    font-weight: bold;
  }
  padding: .4rem;
  background-color: #b0c4de;
  display: flex;
  align-item: center;
  justify-content: space-between;

  a{
    color: white;
    text-decoration: none ;
    margin-right: 1rem;
  }

  
}
`