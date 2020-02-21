import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';


const routes: Routes = [
  { path: '', component: TeamsComponent }
//  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },

];

export const TeamsRoutes = RouterModule.forChild(routes);
