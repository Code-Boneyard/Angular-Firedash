import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AuthService } from './../../../../app/core/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'client-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {
  email: string;

  constructor(
    public auth: AuthService, public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }
}
