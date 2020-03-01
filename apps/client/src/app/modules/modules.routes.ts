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
    path: 'analytics',
    loadChildren: './research/analytics.module#AnalyticsModule',
    data: {
      breadcrumb: 'Research'
    },
    canActivate: []
  },
  {
    path: 'cx',
    loadChildren: './commissioning/cx.module#CommissioningModule',
    data: {
      breadcrumb: 'Commissioning'
    },
    canActivate: []
  },
  {
    path: 'controls',
    loadChildren: './controls/controls.module#ControlsModule',
    data: {
      breadcrumb: 'Controls'
    },
    canActivate: []
  },
  {
    path: 'estimating',
    loadChildren: './estimating/estimating.module#EstimatingModule',
    data: {
      breadcrumb: 'Estimating'
    },
    canActivate: []
  },
  {
    path: 'design',
    loadChildren: './design/design.module#DesignModule',
    data: {
      breadcrumb: 'Design'
    },
    canActivate: []
  },
  {
    path: 'management',
    loadChildren: './management/management.module#ManagementModule',
    data: {
      breadcrumb: 'Management'
    },
    canActivate: []
  },
  {
    path: 'maintenance',
    loadChildren: './maintenance/maintenance.module#MaintenanceModule',
    data: {
      breadcrumb: 'Maintenance'
    },
    canActivate: []
  },
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule',
    data: {
      breadcrumb: 'Projects'
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
    path: 'pursue',
    loadChildren: './pursue/pursue.module#PursueModule',
    data: {
      breadcrumb: 'Pursue'
    },
    canActivate: []
  },
  {
    path: 'success',
    loadChildren: './success/success.module#SuccessModule',
    data: {
      breadcrumb: 'Success'
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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutes { }
