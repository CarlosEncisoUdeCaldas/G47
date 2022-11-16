const express = require("express");
const router = express.Router();
const {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
  loginUser
} = require("../controllers/UserControllers");

//declarando un End Point get de prueba
router.get("/", (req, res) => {
  res.send("<h1>Hola Mundo</h1>");
});

//Operaciones CRUD Basicas de la BD para usuarios
router.post("/createUser", createUser);
router.get("/getAllUsers", readUsers);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

//loguear usuario
router.post("/signIn", loginUser); //ToDO:...falta aun por hacer

//exportar a router
module.exports = router;
