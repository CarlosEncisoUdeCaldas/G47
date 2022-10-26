//Async y Await
function resolveAfter2Seconds() {
    return new Promise ((resolve, reject) => {
        const control = false
        setTimeout( () => {
            if (control) {
                resolve('resolve ejecutado') 
            }else{
                reject('reject ejecutado')
            }
        }, 2000)
    })
}

async function asyncCall () {
    console.log('Calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
      
}

//de esta manera capturamos el reject y lo mostramos por consola
asyncCall()
    .catch(err => console.log(err))
    
