"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listaTareas_1 = require("./listaTareas");
describe('ListaTareas', () => {
    let listaTareas;
    beforeEach(() => {
        listaTareas = new listaTareas_1.ListaTareas();
    });
    it('agregarTarea debería agregar una nueva tarea', () => {
        listaTareas.agregarTarea('Tarea 1');
        expect(listaTareas.tareas.length).toBe(1);
        expect(listaTareas.tareas[0].nombre).toBe('Tarea 1');
        expect(listaTareas.tareas[0].hecho).toBe(false);
    });
    it('eliminarTarea debería eliminar la tarea indicada por índice', () => {
        listaTareas.agregarTarea('Tarea 1');
        listaTareas.agregarTarea('Tarea 2');
        listaTareas.eliminarTarea(0);
        expect(listaTareas.tareas.length).toBe(1);
        expect(listaTareas.tareas[0].nombre).toBe('Tarea 2');
    });
    it('alternarTarea debería alternar el estado de una tarea', () => {
        listaTareas.agregarTarea('Tarea 1');
        listaTareas.alternarTarea(0);
        expect(listaTareas.tareas[0].hecho).toBe(true);
        listaTareas.alternarTarea(0);
        expect(listaTareas.tareas[0].hecho).toBe(false);
    });
    it('alternarTarea debería lanzar un error si el índice está fuera de los límites', () => {
        expect(() => listaTareas.alternarTarea(0)).toThrowError('Índice fuera de los límites');
        listaTareas.agregarTarea('Tarea 1');
        expect(() => listaTareas.alternarTarea(1)).toThrowError('Índice fuera de los límites');
    });
});
//# sourceMappingURL=listatareas.test.js.map