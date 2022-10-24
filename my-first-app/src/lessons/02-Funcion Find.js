import { users, getElementUser } from "./data/users";

console.log( users );

const resultFindUser = getElementUser (2);
const { nombre } = (resultFindUser) ? resultFindUser : 'No hubo resultado'

//tambien podemos hacer la importacion de la funcion desde users
console.log(resultFindUser);
console.log(nombre);