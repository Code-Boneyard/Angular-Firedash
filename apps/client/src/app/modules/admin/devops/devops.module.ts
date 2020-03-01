import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';

import { SprintsModule } from './sprints/sprints.module';
import { WorkModule } from './work/work.module';
import { AreasModule } from './areas/areas.module';
import { DevopsRoutes } from './devops.routes';
import { KanbanModule } from './kanban/kanban.module';

import { DevopsComponent } from './devops.component';

@NgModule({
  imports: [
    CommonModule,
    DevopsRoutes,
    SharedModule,
    SprintsModule,
    WorkModule,
    KanbanModule,
    AreasModule,
  ],
  declarations: [
    DevopsComponent,

  ]
})
export class DevopsModule { }
