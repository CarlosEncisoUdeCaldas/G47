import { useState } from "react";

const RegisterForm = () => {
    //declaramos un useState para el input firstname
    const [ firstname, setFirstName ] = useState('');
    const [ lastname, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');

    //declaramos una funcion handle para el input firstname
    const handleFirstName = ( e ) => {
        setFirstName( e.target.value )
        console.log( firstname )
    }

    const handleLastName = ( e ) => {
        setLastName( e.target.value )
        console.log( lastname )
    }

    const handleEmail = ( e ) => {
        setEmail( e.target.value )
        console.log( email )
    }

  return (
    <>
    <div className="card input-card">
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
          value= { firstname }
          onChange = { handleFirstName }
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
          value= { lastname }
          onChange = { handleLastName }
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
          value= { email }
          onChange = { handleEmail }
        />
      </div>
      <button className='btn btn-primary' onClick={ () => console.log(firstname,lastname,email)}>Console.log</button>
    </div>
      
    </>
  );
};

export default RegisterForm;
