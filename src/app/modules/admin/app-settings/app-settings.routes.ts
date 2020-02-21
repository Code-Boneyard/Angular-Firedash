import { Routes, RouterModule } from '@angular/router';
import { AppSettingsComponent } from './app-settings.component';

const routes: Routes = [
  { path: '', component: AppSettingsComponent },
//  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
];

export const AppSettingsRoutes = RouterModule.forChild(routes);
