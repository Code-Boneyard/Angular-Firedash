import { Routes, RouterModule } from '@angular/router';
import { SubscriptionsComponent } from './subscriptions.component';

const routes: Routes = [
  { path: '', component: SubscriptionsComponent },
//  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
];

export const SubscriptionsRoutes = RouterModule.forChild(routes);
