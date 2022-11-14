//inicializando nuestra variable de tipo express
const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose"); //declaracion de la variable mongoose

//importar el modelo User
const User = require("./models/UserModel");

//configuracion para el parserBody
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//const para crear las rutas de las API Rest
const router = express.Router();

//conexion a la base de datos
const { urlDataBase } = require("./db/dataConnection");
mongoose.connect(urlDataBase);

//declarando un End Point get de prueba
router.get("/", (req, res) => {
  res.send("<h1>Hola Mundo</h1>");
});

//Operaciones CRUD Basicas de una BD
//Crear Usuario - C
router.post("/createUser", (req, res) => {
  const { body } = req;
  const newUser = new User({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email.toLowerCase(),
    password: body.password,
  });
  //Antes de guardar el usuario tenemos que validar si existe o no
  //Opcion 1: usar findOne con un callback como parametro
  User.findOne( { email: newUser.email }, (err, userFinded) => {
    if (err) {
      res.status(500).send({ message: "Error de la BD" });
    }
    if (userFinded) {
      res.send({ message: "Usuario ya existe en la BD" });
    } else {
      newUser
        .save()
        .then(() =>
          res.status(200).send({ message: "Usuario creado con exito" })
        )
        .catch((err) => res.send({ message: err }));
    }
  });

  //opcion 2: usar findOne como una promesa
  // User.findOne( { email: newUser.email })
  // .then( (userFinded) =>{ 
  //   if (userFinded) {
  //         res.send({ message: "Usuario ya existe en la BD" });
  //       } else {
  //         newUser
  //           .save()
  //           .then(() =>
  //             res.status(200).send({ message: "Usuario creado con exito" })
  //           )
  //           .catch((err) => res.send({ message: err }));
  //       }
  // })
  // .catch( err => res.send({ message: err }))
});

//Leer Usuario - R
router.get('/getAllUsers', async (req, res) => {
    //opcion 1: encontrando todos los elementos usando funcion callback
    User.find( { }, (err, result) => { 
        if(err){
            res.send({message:'Error del servidor: ' + err})
        }
        if(result){
            res.status(200).send( { users: result } )
        }
    })
 
    //opcion 2: el mismo procedimiento de arriba pero con async y await
    // const result = await User.find({ })
    // res.send(result)

    //opcion 3: definiendo find como promesa
    // User.find({})
    // .then(result => res.send( { users: result }))
    // .catch( err => res.send( {message: 'Error del servidor: ' + err}))

  } )

// Actualizar usuario - U
router.put('/updateUser/:id', async ( req, res) => { 
    const idToUpdate = req.params.id
    //verificamos que este funcionando el endPoint
    // const result = await User.findById( { _id: idToUpdate },  )
    // res.send(result)
    const { body } = req
    //creamos el usuario a actualizar
    const userToUpdate = {
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email.toLowerCase(),
      password: body.password
    }

    //verificamos que el correo que quieren cambiar no este dentro de la bd
    User.findOne( { email: userToUpdate.email }, (err, emailFinded) => {
      if(emailFinded){
        res.send({ message: 'Email invalidado, ya existe un usuario con este email'})
      }else{
        //sino encuentra una coincidencia entonces actualizamos los datos
        User.findByIdAndUpdate( idToUpdate, userToUpdate, { returnDocument: 'after' } ,(err, userUpdated) => {
            if(userUpdated){
                 res.send( { 
                  message: 'Usuario actualizado con exito', 
                  user: userUpdated
                })
            }else{
              res.status(404).send( { message: 'Usuario no encontrado', err: err.message} )
            }
        } );
      }
    } )
})

// Eliminar usuario - D
router.delete('/deleteUser/:id', (req, res) => {
  const idToDelete = req.params.id

  //usamos el findOneAndRemove()
  User.findOneAndRemove({ _id: idToDelete }, (err, userDeleted) => {
    if(userDeleted){
      res.send( { message: 'Usuario eliminado con exito', user: userDeleted})
    }else{
      res.send( { message: 'Usuario no existe', error: err} )
    }
  })
})



//declaramos el uso de router con la const app
app.use("/api/v1", router);

app.listen(port, () => {
  console.log("### Hola Server ###");
  console.log(`### Server funcionando el puerto ${port} ###`);
});
