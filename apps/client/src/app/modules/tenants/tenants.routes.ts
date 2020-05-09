import { Routes, RouterModule } from '@angular/router';

import { TenantsComponent } from './tenants.component';

const routes: Routes = [
  { path: '', component: TenantsComponent },
  { path: 'apis', loadChildren: () => import('./apis/apis.module').then(m => m.APIsModule) },
  { path: 'subscriptions', loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsModule) },
  { path: 'billing', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule) },
  { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
  { path: 'settings', loadChildren: () => import('./tenant-settings/tenant-settings.module').then(m => m.TenantSettingsModule) },
];

export const TenantsRoutes = RouterModule.forChild(routes);
