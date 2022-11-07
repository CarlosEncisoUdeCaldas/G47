import { useState } from "react";
import InputRegister from "./InputRegister";

//aqui se pueden crear subcomponentes

const RegisterForm = () => {
    // declaramos un useState general para todos los inputs del formulario
    const [inputsRegister, setInputsRegister] = useState({
      firstname: "",
      lastname: "",
      email: "",
      telefono: "", //ToDo: password
    });

    //desestructurar el inputsRegister
    const {firstname, lastname, email, telefono} = inputsRegister

    //funcion manejadora para todos los inputs generales
    const handleInputs = (e) => {
      setInputsRegister({ ...inputsRegister, [e.target.name]: e.target.value });
      console.log(inputsRegister);
    };

    //funcion manejadora del boton submit
    const handleFormSubmit = () => {
      alert(JSON.stringify(inputsRegister));
      //ToDo: Envio de toda la informacion al server
    };

  return (
    <>
      {/* inicio del elemento card */}
      <div className="card input-card">
        {/* inicio del formulario de registro */}
        <form action="" onSubmit={handleFormSubmit}>
            <InputRegister title='First Name:' type="text" name="firstname" value={ firstname } handle={handleInputs}/>
            <InputRegister title='Last Name:' type="text" name="lastname" value={ lastname } handle={handleInputs} />
            <InputRegister title='Email:' type="email" name="email" value={ email } handle={handleInputs} />
            <InputRegister title='Telefono:' type="number" name="telefono" value={ telefono } handle={handleInputs} />
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
        {/* fin del formulario de registro */}
      </div>
    </>
  );
};

export default RegisterForm;
