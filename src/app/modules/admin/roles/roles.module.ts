import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { RolesRoutes } from './roles.routes';

import { RolesComponent } from './roles.component';
import { EditRoleComponent } from './components/edit-role/edit-role.component';
import { RolesListComponent } from './pages/roles-list/roles-list.component';
import { NewRoleComponent } from './components/new-role/new-role.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RolesRoutes
  ],
  declarations: [
    RolesComponent,
    EditRoleComponent,
    NewRoleComponent,
    RolesListComponent,

  ]
})
export class RolesModule { }
