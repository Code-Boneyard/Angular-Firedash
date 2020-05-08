import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './messages/pages/inbox/inbox.component';
import { NewMessageComponent } from './messages/components/new-message/new-message.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      breadcrumb: 'Profile'
    },
  },
  {
    path: 'inbox',
    component: InboxComponent,
    data: {
      breadcrumb: 'Inbox'
    },
  },
  {
    path: 'new-message',
    component: NewMessageComponent,
    data: {
      breadcrumb: 'New Message'
    },
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    data: {
      breadcrumb: 'Notifications'
    },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      breadcrumb: 'Dashboard'
    },
  },
  {
    path: 'modules',
    loadChildren: './../modules/modules.module#ModulesModule',
    canActivate: []
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutesModule { }
