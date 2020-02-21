
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';

import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { ContactsRoutes } from './contacts.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ContactsRoutes
  ],
  providers: [],
  declarations: [
    ContactsListComponent,
    ContactDetailsComponent,
    EditContactComponent,
    NewContactComponent
  ]
})
export class ContactsModule {}
