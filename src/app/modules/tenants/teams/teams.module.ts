import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { TeamsRoutes } from './teams.routes';

import { TeamsComponent } from './teams.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TeamsRoutes
  ],
  declarations: [
    TeamsComponent,
  ]
})
export class TeamsModule { }
