import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { TenantsRoutes } from './tenants.routes';

import { TenantsComponent } from './tenants.component';
import { TenantDetailComponent } from './pages/tenant-detail/tenant-detail.component';
import { TenantListComponent } from './pages/tenant-list/tenant-list.component';
import { EditTenantComponent } from './components/edit-tenant/edit-tenant.component';
import { NewTenantComponent } from './components/new-tenant/new-tenant.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TenantsRoutes
  ],
  declarations: [
    TenantsComponent,
    TenantDetailComponent,
    EditTenantComponent,
    NewTenantComponent,
    TenantListComponent,

  ]
})
export class TenantsModule { }
