//Requires
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let cComando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (cComando) {
    case 'listar':
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(cNombreArchivo => console.log('Archivo creado:', colors.red(cNombreArchivo)))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
}