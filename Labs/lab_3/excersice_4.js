const fs = require('fs');
const zlib = require('zlib');
let gzip = zlib.createGzip();

let gunzip = zlib.createGunzip();

let fileName = 'shadi.txt';

/*var inputSrc = fs.createReadStream(__dirname + '/' + fileName);
var compressedOut = fs.createWriteStream(__dirname + '/' + fileName + '.gz');
inputSrc.pipe(gzip).pipe(compressedOut);*/


let fileName2 = 'shadi_2.txt';
var compressedSrc = fs.createReadStream(__dirname + '/' + fileName + '.gz');
var unCompressedOut = fs.createWriteStream(__dirname + '/' + fileName2);
compressedSrc.pipe(gunzip).pipe(unCompressedOut);

