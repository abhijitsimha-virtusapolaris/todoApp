import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { ITask } from './itask';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'ToDo App!';
  tasks = [];
  newTask: ITask = {};
  constructor(private _taskService: TaskService){

  }
 
ngOnInit(){
  this.getTasks();

}

getTasks(){
  this._taskService.getTasks().then(tasks => this.tasks= tasks)
}

addTask(newTask: ITask){
  this._taskService.addTask(newTask);
}

}
