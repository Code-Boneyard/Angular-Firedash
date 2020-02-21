import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { BillingRoutes } from './billing.routes';

import { BillingComponent } from './billing.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BillingRoutes,
  ],

  declarations: [
    BillingComponent,

  ]
})
export class BillingModule { }
