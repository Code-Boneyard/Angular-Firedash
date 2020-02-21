import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.auth.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.auth.SignOut();
  }


}
