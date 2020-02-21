import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './invoices.component';

const routes: Routes = [
  { path: '', component: InvoicesComponent },
//  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },

];

export const InvoicesRoutes = RouterModule.forChild(routes);
