import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { ActiveProjectsComponent } from './widgets/active-projects/active-projects.component';
import { ActiveTasksComponent } from './widgets/active-tasks/active-tasks.component';
import { MyCalendarComponent } from './widgets/my-calendar/my-calendar.component';
import { RecentFilesComponent } from './widgets/recent-files/recent-files.component';
import { WidgetOptionsComponent } from './widgets/widget-options/widget-options.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    ActiveProjectsComponent,
    ActiveTasksComponent,
    MyCalendarComponent,
    RecentFilesComponent,
    WidgetOptionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule

  ],
  providers: [

  ]
})
export class DashboardModule { }
