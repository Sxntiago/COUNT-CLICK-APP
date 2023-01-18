import React, { useState } from "react";
import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";

function App() {
  const [numClick, setNumClick] = useState(0);

  function handleClick() {
    setNumClick(numClick + 1);
  }

  function startAgain() {
    setNumClick(0);
  }

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <Contador numClick={numClick} />
        <Boton texto='Click' esBotonDeClick={true} manejarClick={handleClick} />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={startAgain}
        />
      </div>
    </div>
  );
}

export default App;
