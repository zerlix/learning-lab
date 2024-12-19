import React from 'react';
import '../styles/Navbar.css'; // Importpfad angepasst
import NavButton from './NavButton'; 

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MyApp</h1>
      <ul className="navbar-links">
        <li><NavButton href="#home">Home</NavButton></li>
        <li><NavButton href="#about">About</NavButton></li>
        <li><NavButton href="#services">Services</NavButton></li>
        <li><NavButton href="#contact">Kontakt</NavButton></li>
      </ul>
    </nav>
  );
}

export default Navbar;