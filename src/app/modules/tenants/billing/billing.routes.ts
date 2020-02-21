import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing.component';

const routes: Routes = [
  { path: '', component: BillingComponent },
//  { path: 'budgets', loadChildren: () => import('./budgets/budgets.module').then(m => m.ActivationsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutes { }
