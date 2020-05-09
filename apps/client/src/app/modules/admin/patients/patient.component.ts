import { Component, OnInit } from '@angular/core';
import { Patient, PatientService } from './patient.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patients$: Observable<Patient[]>;

  displayedColumns: string[] = ['name', 'surname', 'gender', 'action'];

  constructor(private patientService: PatientService) {    
  }

  ngOnInit() {
    this.patients$ = this.patientService.getAll();
  }
}
