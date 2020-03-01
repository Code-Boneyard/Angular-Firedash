import { Routes, RouterModule } from '@angular/router';
import { TenantSettingsComponent } from './tenant-settings.component';

const routes: Routes = [
  { path: '', component: TenantSettingsComponent },

];

export const TenantSettingsRoutes = RouterModule.forChild(routes);

