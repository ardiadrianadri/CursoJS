var promise= require('promise');
var fs = require('fs');

function readFile (path) {
    return new promise (function (resolve,reject) {
        fs.readFile(path,'utf8',function(err,data){
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

readFile('file1.txt').then(function(data){
    var file1 = data;
    readFile('file2.txt').then(function (data) {
        console.log('Contenido de los ficheros: \n' + file1 + '\n' + data);
    }, function (error) {
        console.error(JSON.stringify(error));
    });
}, function (error) {
    console.error(JSON.stringify(error));
});