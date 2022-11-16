//inicializando nuestra variable de tipo express
const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose"); //declaracion de la variable mongoose

//configuracion para el parserBody
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//const para crear las rutas de las API Rest
const router = require('./routes/routes')

//conexion a la base de datos
const { urlDataBase } = require("./db/dataConnection");
//la conexion es una promesa
mongoose.connect(urlDataBase)
  .then( () => console.log('Conectado a MongoDB'))
  .catch( (err) => console.log(`Error de Conexion a MongoDB: ${err}`))

//declaramos el uso de router con la const app
app.use("/api/v1", router);

app.listen(port, () => {
  console.log("### Hola Server ###");
  console.log(`### Server funcionando el puerto ${port} ###`);
});
