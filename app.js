//require's
const argv = require('./config/yargs').argv;
const { CrearArchivo, ListarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        ListarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(e => console.log(e))
        break;
    case 'crear':
        console.log('Se creara un archivo con una tabla de multiplicar');
        CrearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
        break;
}