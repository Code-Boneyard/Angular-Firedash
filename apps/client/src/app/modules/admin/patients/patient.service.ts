import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhysicalExamService, PhysicalExam } from './physical-exam.service';

export class Patient {
  id?: string;
  name: string;
  surname: string;
  gender: string = "male"
  dateOfBirth: Date = new Date();
  physicalExams: PhysicalExam[] = [];
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private afs: AngularFirestore, private pes: PhysicalExamService) {
  }

  create(patient: Partial<Patient>) {
    patient.dateOfBirth = new Date(patient.dateOfBirth);
    return this.afs.collection('/patientSet').add(patient);
  }

  getAll(): Observable<Patient[]> {
    return this.afs.collection<Patient>('patientSet')
      .snapshotChanges()
      .pipe(
        map((subjectSet) => {
          return (subjectSet as DocumentChangeAction<Patient>[])
            .map(s => {
              let data = s.payload.doc.data() as Patient;
              data.id = s.payload.doc.id;
              return data;
            });
        })
      );
  }

  get(patientId: string): Observable<Patient> {
    return this.afs.collection('patientSet')
      .doc(patientId)
      .valueChanges()
      .pipe(
        map((patient) => {
          let dateOfBirth = (<firebase.firestore.Timestamp>patient['dateOfBirth']).toDate();
          let returnSubject = patient as Patient;
          if (returnSubject) {
            returnSubject.id = patientId;
            returnSubject.dateOfBirth = dateOfBirth;

            return returnSubject;
          }
          else
            return null;
        })
      );
  }

  update(patientId: string, patient: Partial<Patient>) {
    delete patient.id;
    patient.dateOfBirth = new Date(patient.dateOfBirth);
    return this.afs.collection('patientSet').doc(patientId).update(patient);
  }

  delete(patient: Patient) {
    this.pes.getAll(patient.id)
      .subscribe(exams => {
        exams.forEach(a =>
          this.afs.collection('patientSet')
            .doc(patient.id)
            .collection('physicalExamSet')
            .doc(a.id)
            .delete()
        );

        return this.afs.collection('/patientSet').doc(patient.id).delete();
      });
  }
}