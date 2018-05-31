const dns = require('dns');

dns.resolve4('www.mum.edu', (err, ips) => {
  
  if (err) throw err;

  console.log(`ip addresses are: ${ips}`);

});