import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Funktion zum Hochzählen des Zählers
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Zähler: {count}</h1>
      <button onClick={increment}>Zähler erhöhen</button>
    </div>
  );
}

export default Counter;