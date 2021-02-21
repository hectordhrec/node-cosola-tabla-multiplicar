// Forma con option
// const argv = require('yargs')
//                 .option('b', {
//                     alias: 'base',
//                     type:'number',
//                     demandOption: true
//                 })
//                 .option('l', {
//                     alias: 'listar',
//                     type:'boolean',
//                     default: false
//                 })
//                 .check((argv, options) => {
//                     if (isNaN(argv.b)) {
//                         throw 'El valor de la base de be se numérico'
//                     }
//                     return true;
//                 })
//                 .argv;
const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type:'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Valor maximo hasta donde va a llegar la tabla'
                    }
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'El valor de la base de be ser numérico'
                    }
                    if (isNaN(argv.h)) {
                        throw 'El valor del hasta de be ser numérico'
                    }
                    return true;
                })
                .argv;
module.exports = {
    argv
}