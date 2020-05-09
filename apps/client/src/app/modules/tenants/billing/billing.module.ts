import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../../app/shared/shared.module';

import { BillingRoutes } from './billing.routes';

import { BillingComponent } from './billing.component';
import { AddPaymentMethodComponent } from './add-payment-method/add-payment-method.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { RecentPaymentsComponent } from './recent-payments/recent-payments.component';
import { UpgradeSubscriptionComponent } from './upgrade-subscription/upgrade-subscription.component';
import { RouterModule } from '@angular/router';
import { ManagePaymentMethodComponent } from './manage-payment-method/manage-payment-method.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BillingRoutes,
  ],

  declarations: [
    BillingComponent,
    AddPaymentMethodComponent,
    InvoicesComponent,
    MakePaymentComponent,
    RecentPaymentsComponent,
    UpgradeSubscriptionComponent,
    ManagePaymentMethodComponent

  ]
})
export class BillingModule { }
