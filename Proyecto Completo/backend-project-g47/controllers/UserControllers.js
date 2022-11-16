const User = require("../models/UserModel");
const bcrypt = require("bcrypt")
const salt = 'MisionTic2022' //esto es para agregar un nivel mas alto de seguridad
const saltRounds = 10

// funcion para crear un usuario
const createUser = (req, res) => {
  const { body } = req;
  const newUser = new User({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email.toLowerCase(),
    password: body.password,
  });
  //Antes de guardar el usuario tenemos que validar si existe o no
  //Opcion 1: usar findOne con un callback como parametro
  User.findOne({ email: newUser.email }, (err, userFinded) => {
    if (err) {
      res.status(500).send({ message: "Error de la BD" });
    } else if (userFinded) {
      res.send({ message: "Usuario ya existe en la BD" });
    } else {
        //aqui encriptamos el password
        const password = newUser.password + salt //esto es un nivel de seguridad mas alto
        bcrypt.hash(password, saltRounds, (err, hash) => { 
            if(err){
                res.send( {message: 'Error del servidor : ' + err})
            }else if(hash){
                newUser.password = hash
                newUser
                  .save()
                  .then(() =>
                    res.status(200).send({ message: "Usuario creado con exito" })
                  )
                  .catch((err) => res.send({ message: err }));
            }else{
                res.send({ message: 'Error al intentar encriptar usuario'})
            }
        })
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
};

//funcion para leer los usuarios
const readUsers = async (req, res) => {
  //opcion 1: encontrando todos los elementos usando funcion callback
  User.find({}, (err, result) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (result) {
      res.status(200).send({ users: result });
    } else {
      res.send(404).send({ message: "No se encontro ningun documento" });
    }
  });

  //opcion 2: el mismo procedimiento de arriba pero con async y await
  // const result = await User.find({ })
  // res.send(result)

  //opcion 3: definiendo find como promesa
  // User.find({})
  // .then(result => res.send( { users: result }))
  // .catch( err => res.send( {message: 'Error del servidor: ' + err}))
};

// funcion para actualizar usuario
const updateUser = async (req, res) => {
  const idToUpdate = req.params.id;
  //verificamos que este funcionando el endPoint
  // const result = await User.findById( { _id: idToUpdate },  )
  // res.send(result)
  const { body } = req;
  //creamos el usuario a actualizar
  const userToUpdate = {
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email.toLowerCase(),
    password: body.password,
  };

  //verificamos que el correo que quieren cambiar no este dentro de la bd
  User.findOne({ email: userToUpdate.email }, (err, userFinded) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor" });
    } else if (userFinded) {
      //comparamos el id del usuario encontrado contra el id que recibimos como parametro
      if (userFinded.id !== idToUpdate) {
        res.send({
          message: "Email invalidado, ya existe un usuario con este email",
          user: userFinded,
        });
      } else {
        // sino son diferentes entonces son iguales y esto nos permite actualizar todo el usuario
        User.findByIdAndUpdate(
          idToUpdate,
          userToUpdate,
          { returnDocument: "after" },
          (err, userUpdated) => {
            if (userUpdated) {
              res.send({
                message: "Usuario actualizado con exito",
                user: userUpdated,
              });
            } else {
              res.status(404).send({ message: "Usuario no encontrado" });
            }
          }
        );
      }
    } else {
      //sino encuentra una coincidencia de email con algun usuario entonces actualizamos los datos
      User.findByIdAndUpdate(
        idToUpdate,
        userToUpdate,
        { returnDocument: "after" },
        (err, userUpdated) => {
          if (userUpdated) {
            res.send({
              message: "Usuario actualizado con exito",
              user: userUpdated,
            });
          } else {
            res.status(404).send({ message: "Usuario no encontrado" });
          }
        }
      );
    }
  });
};
// funcion para eliminar un usuario
const deleteUser = (req, res) => {
  const idToDelete = req.params.id;

  //usamos el findOneAndRemove()
  User.findOneAndRemove({ _id: idToDelete }, (err, userDeleted) => {
    if (userDeleted) {
      res.send({ message: "Usuario eliminado con exito", user: userDeleted });
    } else if (!userDeleted) {
      res.send({ message: "Usuario no existe" });
    } else {
      res.send({ message: `Error del servidor: ${err.message}` });
    }
  });
};
const loginUser = (req, res) => {
  res.send({ message: "Login User On" });
};

module.exports = {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
  loginUser,
};
