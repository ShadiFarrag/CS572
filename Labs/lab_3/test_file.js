
    const fs = require('fs');
    const path = require('path');   
    // const filePath = path.join(__dirname, 'shadi_facebook.jpg');
    const filePath = path.basename('C:\\Users\\Shadi\\Desktop\\shadi_facebook.jpg');
    
    const filePath2 = path.basename("D:\\books\\Cracking the Coding Interview 5th.pdf");

    
    fs.readFile(filePath2, (err,data)=>{
            if (!err){
                console.log('Nice!');
                console.log(data);
            }else{
                console.log('Error: ' + err);
            }
            
        });


