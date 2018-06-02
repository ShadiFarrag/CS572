const fs = require('fs');
const {from} = require('rxjs');
const os = require('os');

// var myObservable = create(observer => {
//         observer.next('Shadi');
//         setTimeout(() => observer.next('Farrag'), 1000);
// });

// myObservable.subscribe(value => console.log(value));


var checkingSystem = function(){
    console.log('Checking your system ...');
    return new Promise(function(resolve, reject){

        if(os.cpus().length >= 2){
            if(os.freemem() >= 4 * 1024 * 1024 * 1024 ){
                resolve('System is Checked Successfully!');
            }else{
                reject('The App needs at least 4 GB of RAM!');
            }
        }else{
            reject('Processor is not supported!');
        }

    });
}

/* Using Promises */
checkingSystem().then((message) => console.log(message)).catch((error) => console.log(error));

/* Using Observable */
const myObservable = from(checkingSystem());
myObservable.subscribe((message)=> console.log(message), (error)=> console.log(error));

