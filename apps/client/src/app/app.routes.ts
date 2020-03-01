import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionsLayoutComponent } from './shared/layouts/sessions-layout/sessions-layout.component';
import { NotFoundComponent } from './sessions/pages/not-found/not-found.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './core/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'sessions/login',
    pathMatch: 'full'
  },
  {
    path: 'sessions',
    component: SessionsLayoutComponent,
    loadChildren: './sessions/sessions.module#SessionsModule',
    canActivate: []
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
