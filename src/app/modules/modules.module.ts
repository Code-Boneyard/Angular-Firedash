import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutes } from './modules.routes';
import { AdminModule } from './admin/admin.module';
import { TasksModule } from './tasks/tasks.module';
import { FilesModule } from './files/files.module';
import { TenantsModule } from './admin/tenants/tenants.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AdminModule,
    TasksModule,
    FilesModule,
    TenantsModule,
    ModulesRoutes
  ]
})
export class ModulesModule { }
