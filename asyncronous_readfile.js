var fs = require('fs')
fs.readFile(process.argv[2], finishedReading)

function finishedReading(error, buffer) {
  if (error) 
  	return console.error(error)
  else	{
  	var result = buffer.toString().split('\n');
  	console.log(result.length -1);
  }  	
};