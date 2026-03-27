export class TaskDetailComponent {}
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { RouterOutlet, RouterLink } from '@angular/router'

@Component({
  selector: 'app-task-detail',
  imports: [RouterModule,RouterOutlet,RouterLink],
  templateUrl: './task-detail-component.html',
  styleUrl: './task-detail-component.css',
})
export class TaskDetail {  
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
  }
}