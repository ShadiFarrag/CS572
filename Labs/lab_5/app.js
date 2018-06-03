const express = require('express');
const fetch = require('node-fetch');
// const fs = require('fs');
const rxjs = require('rxjs');
const {from:rxjsFrom} = rxjs;
const {map:rxjsMap} = require('rxjs/operators');

let app = express();
let port = 3377;

app.set('env', 'development');
app.enable('trust proxy');
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('x-powered-by', false);

function retrieveJsonData(){
    console.log('Retrieving Data from JSON Server');
    return new Promise(function(resolve, reject){
    fetch('http://jsonplaceholder.typicode.com/users/')
        .then(res => {
            console.log('Data Retrieved !');
            // console.log(res);
            resolve(res.json());
        })
        .catch((error) => Console.log(error));
    });
}

app.get('/users', function(request,response){
    response.status(200);

    /* Promise Solution */
    // let fetchUsersPromise = fetch('http://jsonplaceholder.typicode.com/users/');
    // fetchUsersPromise
    //     .then(res => res.json())
    //     .then(json => response.json(json))
    //     .catch((error) => Console.log(error));

    /* Observer Solution 1 */
    // rxjsFrom(retrieveJsonData())
    //     .subscribe((data) => response.json(data)); 

    /* Just Trying another approach */
    // rxjsFrom(fetch('https://api.github.com/users/github'))
    //     .pipe( rxjsMap( (data) => {
    //         console.log(data);
    //         return JSON.parse('{"login": "github","id": 9919}');
    //     } ) )   
    //     .subscribe((data) => response.json(data)); 
        
    /* Async - Await Solution */
    (async function () {
        try{
            console.log('Async - Await Solution');
            const res = await fetch('http://jsonplaceholder.typicode.com/users/');
            const json = await res.json();
            response.json(json);
        }catch(error){
            console.log(error);
        }
    })();

});

app.listen(port, function(){
    console.log('The Server is running on port %s', port);
});
