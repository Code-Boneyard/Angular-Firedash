import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { FilesRoutes } from './files.routes';

import { FilesComponent } from './files.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { DropzoneDirective } from 'src/app/shared/directives/dropzone.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FilesRoutes,
    NgxFileDropModule,
  ],
  declarations: [
    FilesComponent,
    DropzoneDirective
  ]
})
export class FilesModule { }
