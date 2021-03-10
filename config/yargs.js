const { describe } = require('yargs');
const colors= require('colors');
const argv = require('yargs')

.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Esta es la base de la multiplicación'
})
.option('l',{
    alias:'listar',
    type: 'boolean',
    demandOption: true,
    default:false,
    describe: 'Muestra la tabla en la consola'
})

.option('f',{
    alias:'fin',
    type: 'number',
    default: 10,
    describe: 'Define el fin de la tabla de multiplicación'
})
.check((argv, options) =>{
    if (isNaN(argv.base)){
        throw 'LA BASE DEBE SER UN NÚMERO'
    }
    return true;
})
.argv;

module.exports= argv;