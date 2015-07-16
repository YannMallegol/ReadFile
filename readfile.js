


var fs = require('fs');

fs.readFile('Data/polyEx.vtk', function (err, data) {

  if (err) throw err;

  //console.log(data);

var _byteArray = new Uint8Array(data);
//var newrray = new String(_byteArray, "");
// console.log(_byteArray);
// console.log(_byteArray.length);

for(var i = 0; i < _byteArray.length; i++){
  console.log(String.fromCharCode(_byteArray[i]));
}


});
