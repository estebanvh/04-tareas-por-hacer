const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) console.log(err);
    })

}

const cargarDB = () => {

    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }


}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

}

const getListado = (estado = null) => {

    cargarDB();

    if (!estado) {

        return listadoPorHacer;

    } else {

        let listaFiltrada = listadoPorHacer.filter(tarea => tarea.completado.toString() === estado.toString())
        if (listaFiltrada.length <= 0) {
            return false;
        } else {
            return listaFiltrada;
        }

    }


}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }


}

const borrarTarea = (descripcion) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTarea
}