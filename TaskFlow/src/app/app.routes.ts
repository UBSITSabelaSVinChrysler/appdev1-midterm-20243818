import { Routes } from '@angular/router';
import { TaskAddComponent } from './task-add-component/task-add-component';

import { TaskEditComponent } from './task-edit-component/task-edit-component';
import { TaskList } from './task-list-component/task-list-component';
import { TaskInfoComponent } from './task-info-component/task-info-component';
import { TaskDetail } from './task-detail-component/task-detail-component';



export const routes: Routes = [
 { path: '', redirectTo: 'tasks', pathMatch: 'full' },

 { path: 'tasks', component: TaskList },
 { path: 'tasks/new', component: TaskAddComponent},

 {
   path: 'tasks/:id',
   component: TaskDetail,
   children: [
     { path: '', redirectTo: 'info', pathMatch: 'full' },
     { path: 'info', component: TaskInfoComponent},
     { path: 'edit', component: TaskEditComponent}
   ]
 },

 { path: '**', redirectTo: 'tasks' }
];
