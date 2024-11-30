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
        </div>
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <div className="orden">
            <div className="espacio" />
            <div className="espacio-home-button">
              <a href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 3l10 9h-3v9h-6v-6h-4v6h-6v-9h-3z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="/proposito"><button>PROPÓSITO</button></a></li>
            <li><a href="/retos"><button>RETOS</button></a></li>
            <li><a href="/juegos"><button>JUEGOS</button></a></li>
            <li><a href="/canalizacion"><button>CANALIZACIÓN</button></a></li>
            <li><a href="/cuenta" ><button>CUENTA</button></a></li>
          </ul>
        </nav>
      </div>
    </Navar>
  );
};

export default Nav;

const Navar = styled.nav`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .menu-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 100%;
  }

  /* Contenedor de los botones (menú y casita) */
  .buttons-container {
    display: flex;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1000;
    height: 10%;
  }

  .menu-toggle {
  background-color: #444;
  color: white;
  font-size: 7vh; 
  font-weight: lighter;
  border: none;
  height: 12vh;   /* Aumenta la altura del botón */
  width: 12vh;    /* Aumenta el ancho del botón */
  padding: 1vh;  /* Ajusta el padding para dar más espacio alrededor del icono */
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-toggle.open {
  background-color: #7c97cb;
}

.menu-toggle:hover {
  background-color: #7c97cb;
}

  .orden {
    padding-top: 10px; 
    display: grid;
    grid-template-columns: 60% 25%; /* Divide el contenedor en dos columnas iguales */
    width: 100%;
    align-items: center; /* Alinea verticalmente los elementos */
  }

  .espacio {
    height: 13vh;
    widht: 75%
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .espacio-home-button {
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  svg {
    width: 100%;
    height: auto;
  }

  /* Barra de navegación (inicialmente oculta y desplazada hacia la izquierda) */
  .navbar {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px; /* Ancho del menú */
    height: 100vh;
    background-color: #7c97cb;
    transition: left 0.3s ease;
    z-index: 999;

  }

  /* Cuando el menú está abierto, se desliza hacia la derecha (dentro de la vista) */
  .navbar.open {
    left: 0;
  }

  /* Estilo de los enlaces de navegación */
  .nav-links {
    list-style: none;
    padding: 20px ;
    margin: 0;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .nav-links li {
  text-align: left;
  }
  .nav-links button {
    width: 100%;
    background-color:#7c97cb;
    color: white;
    border: 0;
    margin: 3%;
    padding: 15%;
    font-family: League Spartan;
    border-radius: 50px;
    font-size: 2.5vh;
    cursor: pointer;
  }
  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    transition: color 0.3s ease;
    font-weight: bolder;
  }

  .nav-links button:hover {
    background-color: #8a9bcf;
    color: orange;
  }


`;
