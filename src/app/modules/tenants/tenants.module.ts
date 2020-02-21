import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { TenantsRoutes } from './tenants.routes';

import { APIsModule } from './apis/apis.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { BillingModule } from './billing/billing.module';
import { AuthService } from 'src/app/core/auth/auth.service';

import { TenantsComponent } from './tenants.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TenantsRoutes,
    SubscriptionsModule,
    APIsModule,
    BillingModule,
  ],
  declarations: [
    TenantsComponent,
  ],
  providers: [
    AuthService
  ]
})
export class TenantsModule { }
