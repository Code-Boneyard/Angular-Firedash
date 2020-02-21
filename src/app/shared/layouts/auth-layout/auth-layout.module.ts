import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';

import { AuthLayoutComponent } from './auth-layout.component';

import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BreadcrumbComponent } from './header/breadcrumb/breadcrumb.component';
import { TitleBlockComponent } from './header/title-block/title-block.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    AuthLayoutComponent,
    HeaderComponent,
    IconMenuComponent,
    SideNavComponent,
    TitleBlockComponent,
    BreadcrumbComponent
  ]
})
export class AuthLayoutModule { }
