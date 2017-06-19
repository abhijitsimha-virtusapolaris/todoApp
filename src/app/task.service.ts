import { Injectable } from '@angular/core';
import { tasks } from './mockData';
import { ITask } from './itask';

@Injectable()
export class TaskService {

  constructor() { }

  getTasks() {
    return Promise.resolve(tasks);
  }
    addTask(newTask : ITask){
      tasks.push(newTask);  
  }
}
