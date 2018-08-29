const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crea un archivo txt con la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}