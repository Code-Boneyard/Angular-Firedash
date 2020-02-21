import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

import { User } from './../../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private db: AngularFirestore ) { }



  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  createUser(user: User){
    return this.db.collection('users').add(user);
  }
  updateUser(user: User){
    delete user.uid;
    this.db.doc('users/' + user.uid).update(user);
  }

  deleteUser(uid: string){
    this.db.doc('users/' + uid).delete();
  }
}
