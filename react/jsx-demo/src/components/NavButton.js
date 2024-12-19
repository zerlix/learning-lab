import * as React from 'react';
import Button from '@mui/material/Button';

function NavButton({ href, children }) {
  return <Button className="navbar-button" variant="outlined" href={href}>{children}</Button>;
}

export default NavButton;