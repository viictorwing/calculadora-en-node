const fs = require('fs');
const {creararchivo} = require('./helpers/multiplicar');
console.clear()
const argv = require('./config/yargs')
const colors= require('colors');
//const base = 3;

// const[,,arg3 = 'base=1']=process.argv;
// const[,base=1] = arg3.split('=');

// creararchivo(base)
//     .then(nombreArchivo=>console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));

//console.log(argv);
console.log('base: yargs', argv.base);

creararchivo(argv.b, argv.l, argv.f)
     .then(nombreArchivo=>console.log(nombreArchivo.rainbow, 'creado'))
     .catch(err => console.log(err));