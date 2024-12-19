import React from 'react';
import '../styles/Navbar.css'; // Importpfad angepasst
import { Button } from '@mui/material';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MyApp</h1>
      <ul className="navbar-links">
        <li><Button href="#home" variant="outlined">Home</Button></li>
        <li><Button href="#about" variant="outlined">About</Button></li>
        <li><Button href="#services" variant="outlined">Services</Button></li>
        <li><Button href="#contact" variant="outlined">Kontakt</Button></li>
      </ul>
    </nav>
  );
}

export default Navbar;