var entity = require('./entity').pointXY;
var suma = require('./suma').suma;;
var resta = require('./resta').resta;

console.log("Valor de la suma: " + suma.apply(entity));
console.log("Valor de la resta: " + resta.apply(entity));