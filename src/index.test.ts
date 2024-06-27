import { ListaTareas, Tarea } from './index';

describe('ListaTareas', () => {
    let listaTareas: ListaTareas;
  
    beforeEach(() => {
      listaTareas = new ListaTareas();
    });
  
    test('debe agregar una nueva tarea', () => {
      listaTareas.agregarTarea('Nueva Tarea');
      expect(listaTareas.tareas.length).toBe(1);
      expect(listaTareas.tareas[0].nombre).toBe('Nueva Tarea');
      expect(listaTareas.tareas[0].hecho).toBe(false);
    });
  
    test('debe eliminar una tarea', () => {
      listaTareas.agregarTarea('Tarea para eliminar');
      listaTareas.eliminarTarea(0);
      expect(listaTareas.tareas.length).toBe(0);
    });
  
    test('debe alternar el estado de una tarea', () => {
      listaTareas.agregarTarea('Tarea para alternar');
      listaTareas.alternarTarea(0);
      expect(listaTareas.tareas[0].hecho).toBe(true);
      listaTareas.alternarTarea(0);
      expect(listaTareas.tareas[0].hecho).toBe(false);
    });
  
    test('debe manejar índices fuera de los límites al eliminar tarea', () => {
      console.error = jest.fn(); // Mock console.error
      listaTareas.eliminarTarea(1);
      expect(console.error).toHaveBeenCalledWith("Índice fuera de los límites");
    });
  
    test('debe manejar índices fuera de los límites al alternar tarea', () => {
      console.error = jest.fn(); // Mock console.error
      listaTareas.alternarTarea(1);
      expect(console.error).toHaveBeenCalledWith("Índice fuera de los límites");
    });
  });
  