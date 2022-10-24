export const users = [
  {
    id: 1,
    nombre: "Gatito",
    apellido: "Felino",
  },
  { id: 2, nombre: "Perro", apellido: "Can" },
  { id: 3, nombre: "Loro", apellido: "Ave" },
];

export const numero = 47;

export const saludo = (texto) => console.log(`Hola grupo 47, soy ${texto}`);

export const getElementUser = (id) => users.find(
    (item) => item.id === id
    );

// funcion flecha de busqueda con el metodo find
// const getElementUser = (id) => users.find(
//     (item) => ( item.id === id )
//     )

//funcion tradicional con el metodo find
// const getElementUser = function (id) {
//     return users.find( function (item) {
//         return( item.id === id )}
//     )
// }

// export {
//     users as default,
//     numero,
//     saludo
// }
