const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimime en consola una tabla de multiplicar', opciones)
    .command('crear', 'Crea una archivo con la tabla de multiplar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}