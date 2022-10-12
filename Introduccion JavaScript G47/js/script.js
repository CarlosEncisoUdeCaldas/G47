//console log de prueba
console.log("Estoy dentro del archivo script.js");


// funciones para mostrar y ocultar un elemento
function mostrar(valor) {
    document.getElementById('mostrar').style.display = valor;
}

//convirtiendo la funcion mostrar en funcion flecha
// mostrar = (valor) => document.getElementById('mostrar').style.display = valor ; 

//funcion para cambiar el estilo
function cambiarEstilo (size) {
    document.getElementById('estilo').style.fontSize = size;
}

//funcion para encender o apagar el bombillo
function OnOff(rutaImagen) { 
    document.getElementById('imagen').src = rutaImagen;
}

// funcion para contenido de una etiqueta
function cambiarContenido() {
    document.getElementById('demo').innerHTML = 'Contenido cambiado';
}


//insercion de texto a una etiqueta <p>
// document.getElementById("outline").innerHTML = "Insertando texto desde un Script fuera de linea";