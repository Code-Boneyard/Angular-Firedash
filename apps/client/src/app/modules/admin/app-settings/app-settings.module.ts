
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';
import { AppSettingsComponent } from './app-settings.component';
import { AppSettingsRoutes } from './app-settings.routes';
import { ThemesComponent } from './themes/themes.component';
import { CreateThemeComponent } from './create-theme/create-theme.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppSettingsRoutes
  ],
  declarations: [
    AppSettingsComponent,
    ThemesComponent,
    CreateThemeComponent
  ]
})
export class AppSettingsModule { }
