import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment.dev';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SessionsModule } from './sessions/sessions.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './sessions/pages/not-found/not-found.component';
import { ModulesModule } from './modules/modules.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutes,
    CoreModule,
    SharedModule,
    SessionsModule,
    AuthModule,
    ModulesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
