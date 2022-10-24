const miPromesa = new Promise((resolve, reject) => {
    let control = false;

    setTimeout(() => {

        if(control) {
            resolve();
        }else{
            reject()
        }
        
    }, 5000);
});

// console.log(miPromesa);
miPromesa
.then( () => console.log('Este mensaje indica que resolve se ejecutó') )
.catch( () => console.log('Este mensaje indica que el reject se ejecutó') )
