import { Routes, RouterModule } from '@angular/router';
import { APIsComponent } from './apis.component';

const routes: Routes = [
  { path: '', component: APIsComponent},
];

export const APIsRoutes = RouterModule.forChild(routes);
