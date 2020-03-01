import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { ActiveProjectsComponent } from './widgets/active-projects/active-projects.component';
import { ActiveTasksComponent } from './widgets/active-tasks/active-tasks.component';
import { GoalTrackingComponent } from './widgets/goal-tracking/goal-tracking.component';
import { IndustryNewsComponent } from './widgets/industry-news/industry-news.component';
import { MyCalendarComponent } from './widgets/my-calendar/my-calendar.component';
import { ProjectFeedComponent } from './widgets/project-feed/project-feed.component';
import { RecentFilesComponent } from './widgets/recent-files/recent-files.component';
import { RecentModulesComponent } from './widgets/recent-modules/recent-modules.component';
import { SlackActivityComponent } from './widgets/slack-activity/slack-activity.component';
import { SupportComponent } from './widgets/support/support.component';
import { TeamActivityComponent } from './widgets/team-activity/team-activity.component';
import { BestPracticesComponent } from './widgets/best-practices/best-practices.component';
import { TrendingDocumentsComponent } from './widgets/trending-documents/trending-documents.component';
import { TimeManagementComponent } from './widgets/time-management/time-management.component';
import { WidgetOptionsComponent } from './widgets/widget-options/widget-options.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    ActiveProjectsComponent,
    ActiveTasksComponent,
    BestPracticesComponent,
    GoalTrackingComponent,
    IndustryNewsComponent,
    MyCalendarComponent,
    ProjectFeedComponent,
    RecentFilesComponent,
    RecentModulesComponent,
    SlackActivityComponent,
    SupportComponent,
    TeamActivityComponent,
    TrendingDocumentsComponent,
    TimeManagementComponent,
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
