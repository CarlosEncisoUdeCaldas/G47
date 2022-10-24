const miPromesa = new Promise((resolve, reject) => {
  let control = true;

  setTimeout(() => {
    if (control) {
      resolve('control es true');
    //   resolve(); //caso cuando no se envia  ningun parametro
    } else {
      reject('Error, control es false');
    //   reject(); //caso cuando no se envia  ningun parametro
    }
  }, 5000);
});

// console.log(miPromesa);
//en caso que el resolve o el reject no tenga nada que devolver se usan funciones anonimas dentro del then y el catch
// miPromesa
//   .then(() => console.log("Este mensaje indica que resolve se ejecutó"))
//   .catch(() => console.log("Este mensaje indica que el reject se ejecutó"));

//en caso que el resolve o el reject devuelvan algun valor (que son los casos mas comunes) se usan funciones anonimas
// con parametros. Por lo general se estandariza con una variable res para el then y una variable error para el catch
miPromesa
  .then( (resp) => console.log( 'Valor de resolve:', resp )   )
  .catch( (err) => console.log( 'Valor de reject:', err ) );
