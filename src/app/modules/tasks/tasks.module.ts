import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { TasksRoutes } from './tasks.routes';

import { TasksComponent } from './tasks.component';
import { EditTaskComponent } from './modals/edit-task/edit-task.component';
import { NewTaskComponent } from './modals/new-task/new-task.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';

import { TaskService } from 'src/app/modules/tasks/services/task.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TasksRoutes,
  ],

  declarations: [
    TasksComponent,
    EditTaskComponent,
    NewTaskComponent,
    TaskDetailComponent,
    TasksListComponent
  ],

  providers: [
    TaskService
  ]
})
export class TasksModule { }
