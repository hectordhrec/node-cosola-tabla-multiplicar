
const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');

console.clear();


// console.log(process.argv);
//const base = 2;
//crearArchivo(base);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada'))
    .catch(err => console.error(err));
