const colors = require('colors');

const { argv } = require('./config/yargs')
const { crear, getListado, actualizar, borrarTarea } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':

        let tarea = crear(argv.descripcion);
        break;

    case 'listar':

        let listado = getListado(argv.estado);
        if (listado != false) {
            for (let tarea of listado) {
                console.log('=====Por Hacer====='.green);
                console.log(tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('==================='.green);
            }
        } else {
            console.log('No se encontraron tareas');
        }

        break;

    case 'actualizar':

        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':

        let borrado = borrarTarea(argv.descripcion);
        console.log(borrado);
        break;


    default:
        console.log('Comando no reconocido');
        break;
}