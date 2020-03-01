import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesComponent } from './files.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  { path: '', component: FilesComponent },
  { path: 'upload', component: UploadFileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutes { }
