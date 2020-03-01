import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';

import { UsersRoutes } from './users.routes';

import { UserService } from './user.service';

import { UsersComponent } from './users.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { NewUserComponent } from './pages/new-user/new-user.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutes
  ],
  declarations: [
    UsersComponent,
    EditUserComponent,
    NewUserComponent,
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
