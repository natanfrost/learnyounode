var path = require('path');
var fs = require('fs');
fs.readdir(process.argv[2], finishedReading)

function finishedReading (error, data) {
	if (error) 
  		return console.error(error);
  	else{
  		data.forEach(function (file) {
  			if(path.extname(file) === '.' + process.argv[3])
  				console.log(file);  			
  		})
  	}
};
