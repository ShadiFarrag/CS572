const fs = require('fs');

const http = require('http');
const server = http.createServer();

const path = require('path');
const filePath2 = path.join(__dirname,"/Cracking the Coding Interview 5th.pdf");

server.on('request',  (req,res) =>{
    
    res.writeHead(200, {'Content-Type':'application/pdf'});

    /* Solution 1 with Async Read and write the whole data */
    /*fs.readFile(filePath2, (err,data)=>{
        if (!err){
            res.end(data);
        }else{
            console.log('Server Error with reading file: ' + err);
            res.end('Oh! We are Sorry Client!');
        }
    });*/

    /* Solution 2 With pipe */
    /*const readSrc = fs.createReadStream(filePath2);
    readSrc.pipe(res);*/

    
    /* Solution 3 with Stream */
    const srcRead2 = fs.createReadStream(filePath2);
    srcRead2.on('data', (data)=>{
      if(!res.write(data)){
          srcRead2.pause();
      }  
    });

    res.on('drain', ()=> srcRead2.resume());

    srcRead2.on('end', ()=> res.end());


} );


server.listen(8081, ()=> console.log('I am the Server!'));

