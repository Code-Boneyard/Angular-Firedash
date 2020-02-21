
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';
import { AppSettingsComponent } from './app-settings.component';
import { AppSettingsRoutes } from './app-settings.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppSettingsRoutes
  ],
  declarations: [
    AppSettingsComponent,

  ]
})
export class AppSettingsModule { }
