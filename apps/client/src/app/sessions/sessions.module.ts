import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../app/shared/shared.module';

import { SessionsRoutes } from './sessions.routes';

import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RequestAccessComponent } from './pages/request-access/request-access.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { SessionsLayoutComponent } from '../shared/layouts/sessions-layout/sessions-layout.component';
import { NotPermittedComponent } from './pages/not-permitted/not-permitted.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SessionsRoutes
  ],

  declarations: [
    SessionsLayoutComponent,
    LoginComponent,
    LogoutComponent,
    RequestAccessComponent,
    ForgotPassComponent,
    PrivacyComponent,
    RegisterComponent,
    VerifyComponent,
    NotPermittedComponent
  ],
  providers: [
  ]
})
export class SessionsModule { }
