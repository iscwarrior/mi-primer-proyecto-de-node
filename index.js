// console.log("Mi primer proyecto con NODE"){}

// const color = Color('rgb(255, 155, 55)')
// const color = Color({r: 255, g: 255, b: 255})
// const color = Color.rgb(255, 255, 255)
// const color = Color.rgb([255, 255, 255])

const argv  = require("yargs-parser")(process.argv.slice(2))
const colors = require('colors');
// console.log(argv)

const nombre = argv.nombre
const apellido = argv.apellido

// console.log(`Nombre: ${nombre}, Apellido: ${apellido}`);

// const nombre = process.argv[2];
const nombres = [
  "Andres", 
  "Andres de Anda", 
  "Christian",
  "Damian",
  "Dani",
  "Diego",
  "Dan",
  "Gustavo",
  "Ignacio",
  "Jorge",
  "Karla",
  "Lau",
  "Luis",
  "Mara",
  "Max",
  "Pao",
  "Roberto",
  "Samantha"
]


function findName(nombre) {
    console.log("Estamos en la funcion findName con el nombnre =>", nombre);
    const existe = nombres.includes(nombre);
    if (existe) {
        console.log("Bienvenido".red);
        return;
    }
    console.log("Fuera de aqui".blue);
}

findName(nombre)