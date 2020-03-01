import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class PhysicalExam {
  id?: string;
  date: Date = new Date();
  temperatureCelcius: number;
  bloodPressureHg: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhysicalExamService {

  constructor(private afs: AngularFirestore) {
  }

  create(patientId: string, physicalExam: PhysicalExam) {
    physicalExam.date = new Date(physicalExam.date);
    return this.afs.collection('patientSet').doc(patientId)
      .collection<PhysicalExam>('physicalExamSet').add(physicalExam);
  }

  getAll(patientId: string): Observable<PhysicalExam[]> {
    return this.afs
      .collection('patientSet')
      .doc(patientId)
      .collection<PhysicalExam>('physicalExamSet')
      .snapshotChanges()
      .pipe(
        map((subjectSet) => {
          return (subjectSet as Array<DocumentChangeAction<PhysicalExam>>)
            .map(s => {
              let data = s.payload.doc.data() as PhysicalExam;
              data.id = s.payload.doc.id;
              return data;
            });
        })
      );
  }

  get(patientId: string, assessmentId: string): Observable<PhysicalExam> {
    return this.afs
      .collection('patientSet')
      .doc(patientId)
      .collection('physicalExamSet')
      .doc(assessmentId)
      .valueChanges()
      .pipe(
        map((physicalExam) => {
          let returnAssessment = physicalExam as PhysicalExam;
          if (returnAssessment) {
            returnAssessment.id = assessmentId;
            return returnAssessment;
          }
          else
            return null;
        })
      );
  }  

  update(patientId: string, assessmentId: string, physicalExam: Partial<PhysicalExam>) {
    delete physicalExam.id;
    physicalExam.date = new Date(physicalExam.date);
    return this.afs.collection('patientSet').doc(patientId)
      .collection<PhysicalExam>('physicalExamSet').doc(assessmentId).update(physicalExam);
  }

  delete(patientId: string, assessmentId: string) {
    return this.afs.collection('patientSet').doc(patientId)
      .collection<PhysicalExam>('physicalExamSet').doc(assessmentId).delete();
  }
}