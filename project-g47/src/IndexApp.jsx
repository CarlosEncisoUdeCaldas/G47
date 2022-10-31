import React from "react";
import Contador from "./components/Contador/Contador";
import NavBar from "./components/NavBar/NavBar";
import Saludo from "./components/Saludo/Saludo";
import "./IndexApp.css";

//este es nuestro primer componente funcional
const IndexApp = () => {
  const myName = "Tony Stark"; //esta es una constante declarada en JavaScript
  const myGroup = 47; //esta es una constante declarada en JavaScript

  return (
    <>
      {/* <h1 className="saludo">
        Hola Mundo, este es el grupo {myGroup} y mi nombre es {myName}
      </h1>
      <p>Este es mi primer componente</p>
      <p>Estamos usando fragmento</p>
      <Saludo /> */}
      <NavBar />

      <Contador value = { 0 }/>

    </>
  );
};

export default IndexApp;
