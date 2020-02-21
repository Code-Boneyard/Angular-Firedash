import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private firestore: AngularFirestore) { }

  // Create Document
  createTeam(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('Teams')
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  // Read Firestore Collection
  getAllTeams() {
    return this.firestore.collection('Teams').snapshotChanges();
  }

  // Update Firestore Document
  updateTeam(data) {
    return this.firestore
      .collection('Teams')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  // Delete Firestore Document
  deleteTeam(data) {
    return this.firestore
      .collection('Teams')
      .doc(data.payload.doc.id)
      .delete();
  }

}
