import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';

const routes: Routes = [
  { path: '', component: RolesComponent },
//  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },

];

export const RolesRoutes = RouterModule.forChild(routes);
