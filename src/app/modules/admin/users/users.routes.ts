import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component: UsersComponent},
  { path: 'edit', component: EditUserComponent},
  { path: 'new', component: NewUserComponent},
];

export const UsersRoutes = RouterModule.forChild(routes);
