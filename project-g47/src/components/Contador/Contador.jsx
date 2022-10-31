import PropTypes from "prop-types";
import { useState } from "react";

// declaracion del componente Contador
const Contador = ({ value }) => {
  //let { value } = props //esto es lo mismo que la desestructuracion del parametro

  //vamos a declarar la desestructuracion del hook useState
  const [count, setCount] = useState(value);

  //funcion que se ejecuta en el onClick del boton
  function handleAddValue(event) {
    // console.log((value += 1));
    // const { target } = event  //desestructuro al objeto event
    // const { id, name, type } = target  //desestructuro al objeto target
    // // console.log( id );
    // console.log( name );
    // console.log( type );

    //vamos a cambiar el valor de value en el html por medio de JavaScript
    //esto no se deberia hacer para modificar un valor de una variable, ya que no tendriamos el control de la misma
    // document.getElementById('resultado').innerHTML = value += 1;

    setCount(count + 1);
  }

  //handle del boton - 1
  const handleResta = () => {
    setCount(count - 1);
  };

  //handle del boton reset
  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Contador</h1>
      <h2> {count} </h2>
      <button
        className="btn btn-outline-primary"
        id="AddButton"
        name="sumaButton"
        type="button"
        onClick={handleAddValue}
      >
        + 1
      </button>
      <button
        className="btn btn-outline-success"
        id="restaButton"
        name="restaButton"
        type="button"
        onClick={handleResta}
      >
        - 1
      </button>
      <button
        className="btn btn-outline-danger"
        id="resetButton"
        name="resetButton"
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>
    </>
  );
};

export default Contador;

//validamos que la propiedad value sea de tipo numerico
Contador.propTypes = {
  value: PropTypes.number,
};

//definimos un valor por defecto para value
Contador.defaultProps = {
  value: 47,
};
