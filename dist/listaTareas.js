"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskList = void 0;
class TaskList {
    constructor() {
        this.tasks = [];
    }
    addTask(name) {
        this.tasks.push({ name, done: false });
    }
    removeTask(index) {
        if (index < 0 || index >= this.tasks.length) {
            throw new Error('Index out of bounds');
        }
        this.tasks.splice(index, 1);
    }
    toggleTask(index) {
        if (index < 0 || index >= this.tasks.length) {
            throw new Error('Index out of bounds');
        }
        this.tasks[index].done = !this.tasks[index].done;
    }
}
exports.TaskList = TaskList;
//# sourceMappingURL=listaTareas.js.map