import { PatientModule } from './patients/patient.module';
import { AdminRoutes } from './admin.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';

import { UsersModule } from './users/users.module';
import { TenantsModule } from './tenants/tenants.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { RolesModule } from './roles/roles.module';

import { AuthService } from './../../../app/core/auth/auth.service';
import { UserService } from './users/user.service';

import { AdminComponent } from './admin.component';

import { AnalyticsComponent } from './analytics/analytics.component';
import { AdminLogsComponent } from './admin-logs/admin-logs.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RolesModule,
    SubscriptionsModule,
    TenantsModule,
    UsersModule,
    PatientModule,
    AdminRoutes
  ],

  declarations: [
    AdminComponent,
    AdminLogsComponent,
    AnalyticsComponent
  ],
  providers: [
    AuthService,
    UserService
  ]
})
export class AdminModule { }
