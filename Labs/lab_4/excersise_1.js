const {Subject} = require('rxjs');
const {fork} = require('child_process');

const subject = new Subject();

function handleRequests(reqres){
    reqres.res.writeHead(200, {'Content-Type':'text/html'});
    const childProcess = fork('fileReaderOperation.js');
    childProcess.send(reqres.req.url);
    childProcess.on('message', (msg)=> {
        console.log('A chunk received from my child!');
        reqres.res.write(msg); 
    });
    childProcess.on('exit', ()=> {
        console.log('Child Process Has Exited!');
        reqres.res.end();
    });
}

subject.subscribe(handleRequests);

const http = require('http');

http.createServer((req,res) => {
    subject.next({req,res});
}).listen(4000, '127.0.0.1');

console.log('Waiting for Comming Request!');
