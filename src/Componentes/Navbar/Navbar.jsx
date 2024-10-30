import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
   <header className='header'>
    <a href="/" className="logo">llogo</a>
    <nav className="navbar">
        <a href='/'>menu</a>
        <a href='/'>Inicio de Sesion</a>
        <a href='/'>Registrarse</a>
    </nav>
   </header>
  )
}

export default Navbar
