import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './../../../../app/core/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';


@Component({
  selector: 'client-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  emailSignIn() {
    this.auth.emailSignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  googleSignIn() {
    this.auth.googleSignIn();
  }
  microsoftSignIn() {
    this.auth.microsoftSignIn();
  }

  signOut() {
    this.auth.signOut();
  }


}
