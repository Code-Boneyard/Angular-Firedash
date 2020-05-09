import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../../app/shared/shared.module';

import { TeamsRoutes } from './teams.routes';

import { TeamsComponent } from './teams.component';
import { TeamActivityComponent } from './team-activity/team-activity.component';
import { RouterModule } from '@angular/router';
import { NewTeamComponent } from './new-team/new-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TeamsRoutes
  ],
  declarations: [
    TeamsComponent,
    TeamActivityComponent,
    NewTeamComponent,
    EditTeamComponent
  ]
})
export class TeamsModule { }
