import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    data: {
      breadcrumb: 'Admin'
    },
    canActivate: []
  },
  {
    path: 'tasks',
    loadChildren: './tasks/tasks.module#TasksModule',
    data: {
      breadcrumb: 'Tasks'
    },
    canActivate: []
  },
  {
    path: 'files',
    loadChildren: './files/files.module#FilesModule',
    data: {
      breadcrumb: 'Files'
    },
    canActivate: []
  },
  {
    path: 'tenants',
    loadChildren: './tenants/tenants.module#TenantsModule',
    data: {
      breadcrumb: 'Tenants'
    },
    canActivate: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutes { }
