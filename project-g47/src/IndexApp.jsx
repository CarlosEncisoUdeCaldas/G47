import React from 'react'
import "./IndexApp.css"

//este es nuestro primer componente funcional
const IndexApp = () => {
  
  const myName = 'Tony Stark'
  const myGroup = 47;  
  
  return (
    <h1>Hola Mundo, este es el grupo { myGroup } y mi nombre es { myName }</h1>
  )
}

export default IndexApp