import React, { useState } from 'react';
import NavButton from './NavButton';

function Counter() {
  const [count, setCount] = useState(0);

  // Funktion zum Hochzählen des Zählers
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Zähler: {count}</h1>
      <NavButton onClick={increment}>Zähler erhöhen</NavButton>
    </div>
  );
}

export default Counter;