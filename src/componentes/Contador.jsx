import React from "react";
import '../stylesheets/contador.css';

function Contador({numClick}){
   return (
    <div className="contador">
      {numClick}
    </div>
   ) 
}

export default Contador;