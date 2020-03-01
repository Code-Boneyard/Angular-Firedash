import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevopsComponent } from './devops.component';

const routes: Routes = [
  { path: 'kanban', loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevopsRoutes { }
