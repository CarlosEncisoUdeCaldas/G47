import { users, numero, saludo } from "./data/users";

console.log( users );
console.log( numero );
saludo( 'Tom Sawyer' );

//con el array users podemos hacer desestructuring
const [ user01, user02, user03 ] = users; 
// const [ user01, ...usersResto] = users; //en los arrays tambien podemos usar el operador spread
console.log(user01);

const { nombre, apellido, id } = user01
console.log(`La info del user 1 es: ${nombre} ${apellido}, id: ${id}`);
// console.log(usersResto); // //imprimimos por consola el resto del array users
console.log(user02)
console.log(user03)