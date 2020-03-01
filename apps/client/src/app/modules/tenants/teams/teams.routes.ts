import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamActivityComponent } from './team-activity/team-activity.component';
import { NewTeamComponent } from './new-team/new-team.component';


const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'activity', component: TeamActivityComponent },
  { path: 'new', component: NewTeamComponent }
//  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },

];

export const TeamsRoutes = RouterModule.forChild(routes);
