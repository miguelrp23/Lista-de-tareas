import { TaskList } from './listaTareas';

describe('TaskList', () => {
  let taskList: TaskList;

  // Se ejecuta antes de cada prueba, inicializando una nueva instancia de TaskList
  beforeEach(() => {
    taskList = new TaskList();
  });

  // Prueba para agregar una nueva tarea
  it('addTask should add a new task', () => {
    taskList.addTask('Task 1');
    expect(taskList.tasks.length).toBe(1); // Verifica que la longitud del array de tareas sea 1
    expect(taskList.tasks[0].name).toBe('Task 1'); // Verifica que el nombre de la tarea agregada sea 'Task 1'
    expect(taskList.tasks[0].done).toBe(false); // Verifica que la tarea agregada no esté marcada como hecha
  });

  // Prueba para eliminar una tarea por índice
  it('removeTask should remove the task indicated by index', () => {
    taskList.addTask('Task 1');
    taskList.addTask('Task 2');
    taskList.removeTask(0);
    expect(taskList.tasks.length).toBe(1); // Verifica que la longitud del array de tareas sea 1 después de la eliminación
    expect(taskList.tasks[0].name).toBe('Task 2'); // Verifica que la tarea restante sea 'Task 2'
  });

  // Prueba para alternar el estado de una tarea
  it('toggleTask should toggle the state of a task', () => {
    taskList.addTask('Task 1');
    taskList.toggleTask(0);
    expect(taskList.tasks[0].done).toBe(true); // Verifica que el estado de la tarea se haya cambiado a true
    taskList.toggleTask(0);
    expect(taskList.tasks[0].done).toBe(false); // Verifica que el estado de la tarea se haya cambiado a false
  });

  // Prueba para verificar que toggleTask lanza un error si el índice está fuera de los límites
  it('toggleTask should throw an error if the index is out of bounds', () => {
    expect(() => taskList.toggleTask(0)).toThrowError('Index out of bounds'); // Verifica que se lanza un error si se intenta alternar una tarea en un índice inválido
    taskList.addTask('Task 1');
    expect(() => taskList.toggleTask(1)).toThrowError('Index out of bounds'); // Verifica que se lanza un error si se intenta alternar una tarea en un índice mayor al permitido
  });
});
