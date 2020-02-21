import { Routes, RouterModule } from '@angular/router';
import { TenantSettingsComponent } from './tenant-settings.component';

const routes: Routes = [
  { path: '', component: TenantSettingsComponent },
//  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
];

export const TenantSettingsRoutes = RouterModule.forChild(routes);
