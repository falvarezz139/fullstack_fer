import React, { useState, useEffect } from "react";

function Visitas() {
  const [visitas, setVisitas] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisitas((prevVisitas) => prevVisitas + 1);
    }, 2000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <div>
      <h1>Visitas: {visitas}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Ejercicio de Visitas</h1>
      <Visitas />
    </div>
  );
}

export default App;
