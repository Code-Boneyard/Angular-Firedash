import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor(private firestore: AngularFirestore) { }

  // Create Document
  createProject(data) {
    return new Promise<any>((resolve, reject) => {
      
      this.firestore
        .collection('Projects')
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  // Read Firestore Collection
  getAllProjects() {
    return this.firestore.collection('Projects').snapshotChanges();
  }

  // Update Firestore Document
  updateProject(data) {
    return this.firestore
      .collection('Projects')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  // Delete Firestore Document
  deleteProject(data) {
    return this.firestore
      .collection('Projects')
      .doc(data.payload.doc.id)
      .delete();
  }

}
