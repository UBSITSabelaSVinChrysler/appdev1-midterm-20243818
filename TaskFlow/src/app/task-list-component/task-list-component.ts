import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterModule } from '@angular/router'; 
import { Task } from '../task.model';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-list',
  standalone: true,
   imports: [CommonModule, RouterModule],
  templateUrl: './task-list-component.html'
})
export class TaskList {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

deleteTask(id: number) {
  const confirmDelete = confirm('Are you sure you want to delete this task?');

  if (confirmDelete) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}}