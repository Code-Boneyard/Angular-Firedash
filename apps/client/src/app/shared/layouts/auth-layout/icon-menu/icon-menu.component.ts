import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../../../app/core/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'client-icon-menu',
  templateUrl: './icon-menu.component.html',
  styleUrls: ['./icon-menu.component.scss']
})
export class IconMenuComponent {
  email: string;
  password: string;

  constructor(public AuthService: AuthService, private afs: AngularFirestore) {}

  signOut() {
    this.AuthService.signOut();
  }
  onNavigate(){
    // this.router.navigateByUrl("https://www.google.com");
    window.open("https://support.sutroanalytics.com", "_blank");
}
}
