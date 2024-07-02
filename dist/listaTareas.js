"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaTareas = void 0;
class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.hecho = false;
    }
}
class ListaTareas {
    constructor() {
        this.tareas = [];
    }
    agregarTarea(nombre) {
        this.tareas.push(new Tarea(nombre));
    }
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
exports.ListaTareas = ListaTareas;
//# sourceMappingURL=listaTareas.js.map