//uso del API Fetch

//la funcion getJsonByFetch retorna un valor ya sea del resolve (data) o del reject (err)
function getJsonByFetch() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then( data => console.log(data[0]) )
        // .then(data => console.log(data)) //esta informacion es para mostrar por consola la data
        .catch(err => console.log(err));
}

getJsonByFetch();


