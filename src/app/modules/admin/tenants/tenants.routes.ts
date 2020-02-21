import { Routes, RouterModule } from '@angular/router';
import { TenantsComponent } from './tenants.component';
import { TenantListComponent } from './pages/tenant-list/tenant-list.component';


const routes: Routes = [
  { path: '', component: TenantListComponent }
//  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },

];

export const TenantsRoutes = RouterModule.forChild(routes);
