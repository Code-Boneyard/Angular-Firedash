import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../../app/shared/shared.module';

import { TenantSettingsRoutes } from './tenant-settings.routes';

import { TenantSettingsComponent } from './tenant-settings.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TenantSettingsRoutes
  ],

  declarations: [
    TenantSettingsComponent,

  ]
})
export class TenantSettingsModule { }
