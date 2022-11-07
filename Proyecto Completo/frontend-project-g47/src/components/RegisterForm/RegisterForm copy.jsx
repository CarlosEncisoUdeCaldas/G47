import { useState } from "react";

const RegisterForm = () => {
  //declaramos un useState para el input firstname
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // declaramos un useState general para todos los inputs del formulario
  const [ inputsRegister, setInputsRegister ] = useState({
    firstname:'',
    lastname:'',
    email:''
  });

  //declaramos una funcion handle para el input firstname
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    console.log(firstname);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    console.log(lastname);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  //funcion manejadora del boton submit
  const handleFormSubmit = () => {
    alert(`Full Name: ${firstname} ${lastname} y su correo es ${email}`);
    //ToDo: Envio de toda la informacion al server
  };

  return (
    <>
      {/* inicio del elemento card */}
      <div className="card input-card">

        {/* inicio del formulario de registro */}
        <form action="" onSubmit={ handleFormSubmit } >
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              placeholder="Type your Firstname"
              value={firstname}
              onChange={handleFirstName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="Type your Lastname"
              value={lastname}
              onChange={handleLastName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="example@email.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Enviar
          </button>
        </form>
        {/* fin del formulario de registro */}
      </div>
    </>
  );
};

export default RegisterForm;
