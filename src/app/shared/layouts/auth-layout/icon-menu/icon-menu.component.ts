import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-icon-menu',
  templateUrl: './icon-menu.component.html',
  styleUrls: ['./icon-menu.component.scss']
})
export class IconMenuComponent {
  email: string;
  password: string;

  constructor(public AuthService: AuthService, private afs: AngularFirestore) {}

  signOut() {
    this.AuthService.SignOut();
  }

}
