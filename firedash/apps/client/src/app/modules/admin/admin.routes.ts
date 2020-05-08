import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

import { AnalyticsComponent } from './analytics/analytics.component';
import { AdminLogsComponent } from './admin-logs/admin-logs.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'logs', component: AdminLogsComponent },
  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
  { path: 'app', loadChildren: () => import('./app-settings/app-settings.module').then(m => m.AppSettingsModule) },
  { path: 'tenants', loadChildren: () => import('./tenants/tenants.module').then(m => m.TenantsModule) },
  { path: 'subscriptions', loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsModule) },
  { path: 'devops', loadChildren: () => import('./devops/devops.module').then(m => m.DevopsModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'patients', loadChildren: () => import('./patients/patient.module').then(m => m.PatientModule) },
];

export const AdminRoutes = RouterModule.forChild(routes);
