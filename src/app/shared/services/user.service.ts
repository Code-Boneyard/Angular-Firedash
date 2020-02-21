import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { User } from './../models/user.model';

// Import User Interface

export class UserService {
  constructor(private firestore: AngularFirestore, private afauth: AngularFireAuthModule)  { }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  createUser(user: User){
    return this.firestore.collection('users').add(user);
  }
  updateUser(user: User){
    delete user.uid;
    this.firestore.doc('users/' + user.uid).update(user);
  }

  deleteUser(uid: string){
    this.firestore.doc('users/' + uid).delete();
  }
}
