import React, { useState } from 'react';
import Button from '@mui/material/Button';
import '../styles/NavButton.css'; 

function NavButton({ href, children, onClick }) {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <Button
      className={`navbar-button ${hover ? 'hover' : ''}`}
      variant="outlined"
      href={href}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick} 
    >
      {children}
    </Button>
  );
}

export default NavButton;