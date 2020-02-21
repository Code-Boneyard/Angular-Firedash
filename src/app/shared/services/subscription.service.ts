import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor(private firestore: AngularFirestore) { }

  // Create Document
  createSubscription(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('Subscriptions')
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  // Read Firestore Collection
  getAllSubscriptions() {
    return this.firestore.collection('Subscriptions').snapshotChanges();
  }

  // Update Firestore Document
  updateSubscriptions(data) {
    return this.firestore
      .collection('Subscriptions')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  // Delete Firestore Document
  deleteSubscription(data) {
    return this.firestore
      .collection('Subscriptions')
      .doc(data.payload.doc.id)
      .delete();
  }

}
