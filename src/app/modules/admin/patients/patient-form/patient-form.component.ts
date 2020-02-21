import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Patient, PatientService } from './../patient.service';

@Component({
  selector: 'patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  patient: Patient = new Patient();
  id: string;

  constructor(
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    if (this.id)
      this.patientService.get(this.id)
        .pipe(take(1))
        .subscribe((p: Patient) => {
          p ? this.patient = p : this.patient = new Patient();
        });
  }

  save(patient: Patient) {
    if (this.id) {
      this.patientService.update(this.patient.id, patient);
    }
    else
      this.patientService.create(patient);

    this.router.navigate(['/auth/modules/admin/patients']);
  }

  delete() {
    if (!confirm('Are you Sure?')) return;

    this.patientService.delete(this.patient);
    this.router.navigate(['/auth/modules/admin/patients']);
  }
}
