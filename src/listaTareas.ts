
class Tarea {
    nombre: string;
    hecho: boolean;
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.hecho = false;
    }
  }
  
 export class ListaTareas {
    tareas: Tarea[] = [];
  
   
    agregarTarea(nombre: string) {
      this.tareas.push(new Tarea(nombre));
    }
  
 
    eliminarTarea(indice: number) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas.splice(indice, 1);
      } else {
        console.error("Índice fuera de los límites");
      }
    }
  
    alternarTarea(indice: number) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas[indice].hecho = !this.tareas[indice].hecho;
      } else {
        console.error("Índice fuera de los límites");
      }
    }
  }