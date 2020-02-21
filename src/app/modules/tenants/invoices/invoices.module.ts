import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { InvoicesRoutes } from './invoices.routes';

import { InvoicesComponent } from './invoices.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InvoicesRoutes
  ],

  declarations: [
    InvoicesComponent,

  ]
})
export class InvoicesModule { }
