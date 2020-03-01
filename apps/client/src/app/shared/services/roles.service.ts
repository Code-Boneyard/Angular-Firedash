import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private firestore: AngularFirestore) { }

  // Create Document
  createRole(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('Roles')
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  // Read Firestore Collection
  getAllRoles() {
    return this.firestore.collection('Roles').snapshotChanges();
  }

  // Update Firestore Document
  updateRoles(data) {
    return this.firestore
      .collection('Roles')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  // Delete Firestore Document
  deleteRole(data) {
    return this.firestore
      .collection('Roles')
      .doc(data.payload.doc.id)
      .delete();
  }

}
