import React from 'react';
import styled from 'styled-components';  // Correct import
import { Button } from './Button';      // Make sure Button exists at this path

const Nav = () => {
  return (
    <Navar>
      <Button />
      <div className="auth-links">
        <h2>Iniciar sesión</h2>
        <h2>Registrarse</h2>
      </div>
      <div className="lista">
        <a href="/" aria-label="Proposito">Propósito</a>
        <a href="/" aria-label="Retos">Retos</a>
        <a href="/" aria-label="Juegos">Juegos</a>
        <a href="/" aria-label="Canalizacion">Canalización</a>
        <a href="/" aria-label="Cuenta">Cuenta</a>
      </div>
    </Navar>
  );
}

export default Nav;

const Navar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem;
  background-color: #b0c4de;

  /* Styling for the Authentication section */
  .auth-links {
    display: flex;
    gap: 1rem;
  }

  h2 {
    color: white;
    font-weight: bold;
    margin: 0;
  }

  /* Styling for the links */
  .lista {
    display: flex;
    gap: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    font-weight: bold;
  }

  /* Optional: Responsiveness for mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
    .auth-links {
      margin-bottom: 1rem;
    }

    .lista {
      flex-direction: column;
      gap: 0.5rem;
    }

    a {
      margin-right: 0;
    }
  }
`;
