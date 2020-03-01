import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../../app/shared/shared.module';

import { SubscriptionsRoutes } from './subscriptions.routes';

import { SubscriptionsComponent } from './subscriptions.component';
import { SubscriptionListComponent } from './pages/subscription-list/subscription-list.component';
import { NewSubscriptionComponent } from './components/new-subscription/new-subscription.component';
import { EditSubscriptionComponent } from './components/edit-subscription/edit-subscription.component';
import { SubscriptionDetailsComponent } from './pages/subscription-details/subscription-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SubscriptionsRoutes
  ],

  declarations: [
    SubscriptionsComponent,
    NewSubscriptionComponent,
    EditSubscriptionComponent,
    SubscriptionDetailsComponent,
    SubscriptionListComponent
]
})
export class SubscriptionsModule { }
