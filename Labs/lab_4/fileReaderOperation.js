const fs = require('fs');
const path = require('path');


process.on('message', (msg)=> {
    // console.log(msg);
    
    const filePath = path.join(__dirname,msg);
    const srcRead2 = fs.createReadStream(filePath);

    srcRead2.on('data', (data)=>{
        process.send(data.toString());  
    });

    srcRead2.on('end', ()=> process.send('ended'));

});

