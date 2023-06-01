const fs = require("fs");
console.log("readFile",fs.readFile)
console.log("writeFile", fs.writeFile)
/**
 * nombres.map(inx)=>{} los parametrs de un map, es callback, y una callbacl valor, indice y arreglo 
 * se puede hacer con fetch
 * .then */

fs.readFile("./hola.txt","utf8", (err,data)=> {
    if(err){
        console.log(err)
        return; // sirve para salir
    }
    // si leyo ben el contenido imprime el contenido
    console.log("Data",data)
})


fs.writeFile('message.txt', 'Hello Node.js', 'utf8', (err,data)=> {
    if(err){
        console.log(err)
        return; // sirve para salir
    }
    // si leyo ben el contenido imprime el contenido
    console.log("Data",data)
});

fs.appendFile('message.txt', 'data to append', 'utf8', (err,data)=> {
    if(err){
        console.log(err)
        return; // sirve para salir
    }
    // si leyo ben el contenido imprime el contenido
    console.log("Data",data)
});