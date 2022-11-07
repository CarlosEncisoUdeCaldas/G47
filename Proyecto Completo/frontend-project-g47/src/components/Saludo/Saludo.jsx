import PropTypes from 'prop-types';

const Saludo = ( props ) => {
    const { nombre , apellido } = props; //desestructuración del objeto props
    // console.log( nombre );
    // console.log( apellido );

  return (
    <>
        <p>Bienvenido Sr(a). { nombre } { apellido } </p>
        <a href="/">Index</a>
    </>
  )
}

export default Saludo

Saludo.propTypes = {
    nombre: PropTypes.string
}

Saludo.defaultProps = {
    nombre: "undefined",
    apellido: "undefined"
}