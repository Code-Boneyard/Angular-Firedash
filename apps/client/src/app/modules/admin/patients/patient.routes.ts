import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';

const routes: Routes = [
  { path: '', component: PatientComponent },
  { path: 'new', component: PatientFormComponent },
  
//  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },

];

export const PatientRoutes = RouterModule.forChild(routes);
