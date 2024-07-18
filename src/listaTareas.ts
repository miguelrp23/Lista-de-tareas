
export class TaskList {
  tasks: { name: string; done: boolean }[];

  constructor() {
    this.tasks = [];
  }

  addTask(name: string) {
    this.tasks.push({ name, done: false });
  }

  removeTask(index: number) {
    if (index < 0 || index >= this.tasks.length) {
      throw new Error('Index out of bounds');
    }
    this.tasks.splice(index, 1);
  }

  toggleTask(index: number) {
    if (index < 0 || index >= this.tasks.length) {
      throw new Error('Index out of bounds');
    }
    this.tasks[index].done = !this.tasks[index].done;
  }
}

