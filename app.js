const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar')

require('colors');

console.clear();

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));

