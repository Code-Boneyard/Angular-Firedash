import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { AuthRoutesModule } from './auth.routes';

import { DashboardModule } from './dashboard/dashboard-module';
import { ContactsModule } from './contacts/contacts.module';

import { AuthService } from '../core/auth/auth.service';
import { WalkthroughService } from '../shared/utils/walkthrough.service';
import { CalendarService } from '../shared/utils/calendar.service';
import { BillingService } from '../shared/utils/billing.service';
import { NotificationService } from '../shared/utils/notification.service';
import { SubscriptionService } from '../shared/utils/subscription.service';
import { MessageService } from './../shared/utils/message.service';

import { AuthLayoutModule } from '../shared/layouts/auth-layout/auth-layout.module';
import { FooterComponent } from '../shared/navigation/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './messages/pages/inbox/inbox.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewMessageComponent } from './messages/components/new-message/new-message.component';
import { NotFoundComponent } from './not-found/not-found.component'



@NgModule({
  declarations: [
    FooterComponent,
    ProfileComponent,
    InboxComponent,
    NotificationsComponent,
    NewMessageComponent,
    NotFoundComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AuthRoutesModule,
    ContactsModule,
    DashboardModule,
    AuthLayoutModule
  ],
  providers: [
    WalkthroughService,
    CalendarService,
    BillingService,
    MessageService,
    NotificationService,
    SubscriptionService,
    AuthService
  ]
})
export class AuthModule { }
