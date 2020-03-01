import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RequestAccessComponent } from './pages/request-access/request-access.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { RegisterComponent } from './pages/register/register.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { NotPermittedComponent } from './pages/not-permitted/not-permitted.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'request',
    component: RequestAccessComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPassComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'not-permitted',
    component: NotPermittedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutes { }
