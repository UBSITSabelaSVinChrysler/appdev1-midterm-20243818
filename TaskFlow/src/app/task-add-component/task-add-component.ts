import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-add-component',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './task-add-component.html',
  styleUrl: './task-add-component.css',
})
export class TaskAddComponent {

  task: any = {};

  constructor(private taskService: TaskService, private router: Router) {}

  addTask() {
    this.task.id = Date.now();
    this.taskService.addTask(this.task);
    alert('Task added successfully!');
    this.router.navigate(['/tasks']);
  }
}