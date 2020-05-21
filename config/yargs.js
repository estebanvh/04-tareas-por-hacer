const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Cambia como completado la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista las tareas por hacer', {
        estado: {
            demand: false,
            alias: 'e',
            desc: 'Filtra por estado'
        }
    })
    .command('borrar', 'Elimina tarea por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}