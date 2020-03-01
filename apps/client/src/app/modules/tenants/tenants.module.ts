import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../app/shared/shared.module';

import { TenantsRoutes } from './tenants.routes';

import { APIsModule } from './apis/apis.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { BillingModule } from './billing/billing.module';
import { AuthService } from './../../../app/core/auth/auth.service';

import { TenantsComponent } from './tenants.component';
import { TeamsModule } from './teams/teams.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TenantsRoutes,
    TeamsModule,
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
