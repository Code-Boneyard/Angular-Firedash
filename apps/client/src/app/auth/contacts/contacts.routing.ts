import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';


const routes: Routes = [
  {
    path: 'detail',
    component: ContactDetailsComponent
  },
  {
    path: 'list',
    component: ContactsListComponent
  },
  {
    path: 'edit',
    component: EditContactComponent
  },
  {
    path: 'new',
    component: NewContactComponent
  }
];

export const ContactsRoutes = RouterModule.forChild(routes);
