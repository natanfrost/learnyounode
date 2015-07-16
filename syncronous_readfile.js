var fs = require('fs');
// note: you can pass the filesystem as second parameter on require
// and this way you dont need to cast to string the buffer
var Buffer = fs.readFileSync(process.argv[2]);

var result = Buffer.toString().split('\n');
console.log(result.length - 1);