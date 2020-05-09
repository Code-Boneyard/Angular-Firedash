import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { NewTaskComponent } from './modals/new-task/new-task.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { EditTaskComponent } from './modals/edit-task/edit-task.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'edit', component: EditTaskComponent },
  { path: 'detail', component: TaskDetailComponent },
  { path: 'new', component: NewTaskComponent },
  { path: 'list', component: TasksListComponent },
];

export const TasksRoutes = RouterModule.forChild(routes);
