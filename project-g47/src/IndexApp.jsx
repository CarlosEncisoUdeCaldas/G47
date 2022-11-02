import React from "react";
import { Outlet } from "react-router-dom";
import Contador from "./components/Contador/Contador";
import NavBar from "./components/NavBar/NavBar";
import Saludo from "./components/Saludo/Saludo";
import "./IndexApp.css";

//este es nuestro primer componente funcional
const IndexApp = () => {
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        
      </footer>

    </>
  );
};

export default IndexApp;
