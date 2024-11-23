import styled from 'styled-components';  // Correct import
import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado de la barra de navegación
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navar>
      <div className="menu-container">
        <div className="buttons-container">
          <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            ☰
          </button>
          <a href='/'><button className={`home-button ${isOpen ? 'visible' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 3l10 9h-3v9h-6v-6h-4v6h-6v-9h-3z" fill="none" stroke="white" strokeWidth="2" />
            </svg>
          </button></a>
        </div>
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="/Proposito">Propósito</a></li>
            <li><a href="/retos">Retos</a></li>
            <li><a href="/Juegos">Juegos</a></li>
            <li><a href="/canalizacion">Canalización</a></li>
            <li><a href="/cuenta">Cuenta</a></li>
          </ul>
        </nav>
      </div>
    </Navar>
  );
};

export default Nav;

const Navar = styled.nav`
  /* Reset de márgenes y padding */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Contenedor de los botones de menú y casita */
  .menu-container {
    position: relative;
    z-index: 100;
  }

  /* Contenedor de los botones (menú y casita) */
  .buttons-container {
    display: flex;
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 1000;
  }

  /* Estilo del botón de menú (ícono de hamburguesa) */
  .menu-toggle {
    background-color: #444;
    color: white;
    font-size: 45px;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    margin-right: 10px;  /* Espacio entre los botones */
    transition: background-color 0.3s ease;
  }

  /* Cuando el menú está abierto, cambia el color del botón */
  .menu-toggle.open {
    background-color: #7c97cb; /* Cambia el color al abrir */
  }

  .menu-toggle:hover {
    background-color: #555;
  }

  /* Estilo del botón de casita */
  .home-button {
    background-color: transparent;  /* Sin fondo */
    color: white;
    font-size: 45px;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    transition: color 0.3s ease;
    visibility: hidden;  /* Por defecto está oculto */
  }

  /* Mostrar el botón de "casita" solo cuando el navbar esté abierto */
  .home-button.visible {
    visibility: visible;  /* Solo visible cuando el navbar está abierto */
  }

  /* Cambia el color del botón de "casita" al hacer hover */
  .home-button:hover {
    color: #f39c12; /* Cambia color cuando el usuario pasa el mouse */
  }

  /* Barra de navegación (inicialmente oculta y desplazada hacia la izquierda) */
  .navbar {
    position: fixed;
    top: 0;
    left: -250px; /* El menú comienza fuera de la vista a la izquierda */
    width: 250px; /* Ancho del menú */
    height: 100vh; /* Alto completo de la pantalla */
    background-color: #7c97cb;
    transition: left 0.3s ease; /* Animación de deslizamiento */
    z-index: 999; /* Asegura que esté encima de otros elementos */
    padding-top: 60px; /* Deja espacio para el botón de menú */
  }

  /* Cuando el menú está abierto, se desliza hacia la derecha (dentro de la vista) */
  .navbar.open {
    left: 0; /* El menú se mueve a la posición 0, es decir, completamente visible */
  }

  /* Estilo de los enlaces de navegación */
  .nav-links {
    list-style: none;
    padding: 20px 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Alinea los elementos a la izquierda */
  }

  .nav-links li {
    margin: 15px 0;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    padding: 10px;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: #f39c12;
  }

  /* Estilos para botones generales (si los necesitaras) */
  .button {
    background-color: #f95f5e;
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
