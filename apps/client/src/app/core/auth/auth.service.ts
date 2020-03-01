import { Injectable, NgZone, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './../../shared/models/user.model';
import { DOCUMENT } from '@angular/common';
import { auth } from 'firebase';

@Injectable()

export class AuthService  {

  user$: Observable<User>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
        this.user$ = afAuth.authState.pipe(
          switchMap(user => {
              // Logged in
            if (user) {
              return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
            } else {
              // Logged out
              return of(null);
            }
          })
        );
    }

/* Update User Data */
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, { merge: true })

  }

  /* Email Signin */
  emailSignIn( email: string, password: string ) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .then(() => {
        this.router.navigate(['/auth/dashboard']);
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

/* Google Signin */
async googleSignIn(){
  const provider = new auth.GoogleAuthProvider();
  const credential = await this.afAuth.auth.signInWithPopup(provider);
  return this.updateUserData(credential.user)
  .then(res => {
    console.log('Successfully signed in!');
  })
  .then(() => {
    this.router.navigate(['/auth/dashboard']);
  })
  .catch(err => {
    console.log('Something is wrong:', err.message);
  });
}



/* Microsoft Signin */
async microsoftSignIn(){
  const provider = new auth.OAuthProvider('microsoft.com');
  const credential = await this.afAuth.auth.signInWithPopup(provider);
  return this.updateUserData(credential.user)
  .then(res => {
    console.log('Successfully signed in!');
  })
  .then(() => {
    this.router.navigate(['/auth/dashboard']);
  })
  .catch(err => {
    console.log('Something is wrong:', err.message);
  });
}





  /* Email Sign out */
  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.document.location.href = 'https://www.sutroanalytics.com';
    });
  }







/* Office 365 Signin */




/* Verify Email */






/* Forgot Password */
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }
}
