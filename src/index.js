"use strict";
// clases
class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.hecho = false;
    }
}
// el array para guardar las tareas
class ListaTareas {
    constructor() {
        this.tareas = [];
    }
    // agregar una tarea al array
    agregarTarea(nombre) {
        this.tareas.push(new Tarea(nombre));
    }
    //eliminar una tarea del array
    eliminarTarea(indice) {
        if (indice >= 0 && indice < this.tareas.length) {
            this.tareas.splice(indice, 1);
        }
        else {
            console.error("Índice fuera de los límites");
        }
    }
    alternarTarea(indice) {
        if (indice >= 0 && indice < this.tareas.length) {
            this.tareas[indice].hecho = !this.tareas[indice].hecho;
        }
        else {
            console.error("Índice fuera de los límites");
        }
    }
}
const listaTareas = new ListaTareas();
// aqui es un prompt el que nos ayuda a guardar la informacion
function agregarTarea() {
    const nombreTarea = prompt("Ingrese el nombre de la tarea:");
    if (nombreTarea) {
        listaTareas.agregarTarea(nombreTarea);
        renderizarTareas();
    }
}
function eliminarTarea(indice) {
    listaTareas.eliminarTarea(indice);
    renderizarTareas();
}
function alternarTarea(indice) {
    listaTareas.alternarTarea(indice);
    renderizarTareas();
}
//mostrar las tareas
function renderizarTareas() {
    const listaTareasElemento = document.getElementById("lista-tareas");
    if (!listaTareasElemento) {
        console.error("Elemento de la lista de tareas no encontrado");
        return;
    }
    listaTareasElemento.innerHTML = "";
    listaTareas.tareas.forEach((tarea, indice) => {
        const tareaElemento = document.createElement("li");
        tareaElemento.textContent = tarea.nombre;
        if (tarea.hecho) {
            tareaElemento.classList.add("hecho");
        }
        // Botón para alternar el estado de la tarea (hecho/no hecho)
        const alternarBoton = document.createElement("button");
        alternarBoton.textContent = tarea.hecho ? "no realizada" : "realizada";
        alternarBoton.addEventListener("click", (evento) => {
            evento.stopPropagation(); // Evita que el clic también active el evento del <li>
            alternarTarea(indice);
        });
        //eliminar la tarea
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", (evento) => {
            evento.stopPropagation(); // Evita que el clic también marque la tarea como completada
            eliminarTarea(indice);
        });
        tareaElemento.appendChild(alternarBoton);
        tareaElemento.appendChild(botonEliminar);
        listaTareasElemento.appendChild(tareaElemento);
    });
}
