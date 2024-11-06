
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
      <div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
    </Navar>
  );
}

export default Nav;

const Navar = styled.nav`
 * {
margin: 0;
padding: 0;
box-sizing: border-box;
}

/* Estilo del botón de menú (ícono de hamburguesa) */
.menu-toggle {
position: fixed;
top: 0px;
left: 0px;
width: 550 px;
background-color: #333;
color: white;
font-size: 30px;
border: none;
padding: 10px 15px;
cursor: pointer;
z-index: 1000; /* Asegura que el botón esté encima del menú */
}

.menu-toggle:hover {
background-color: #444;
}

/* Barra de navegación (oculta por defecto) */
.navbar {
position: fixed;
top: 0;
left: 0;
width: 20%;
background-color: #7c97cb;
height: 0; /* Empieza oculta */
overflow: hidden;
transition: height 0.3s ease-in-out;
z-index: 999;
}

/* Estilos cuando la barra está abierta (estado "open") */
.navbar.open {
height: 100%; /* Ajusta la altura dependiendo de cuántos elementos tenga tu menú */
}

/* Estilo de los enlaces de navegación */
.nav-links {
list-style: none;
padding: 20px 0;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
}

.nav-links li {
margin: 15px 0;
}

.nav-links a {
color: white;
text-decoration: none;
font-size: 20px;
transition: color 0.3s ease;
}

.nav-links a:hover {
color: #f39c12;
}
`;
