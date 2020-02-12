const opts = {
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
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera una tabla de multplicar especificando la base y límite en un archivo de texto', opts)
    .help()
    .argv;

module.exports = {
    argv
}