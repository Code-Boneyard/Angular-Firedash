import { Component, OnInit } from '@angular/core';
import { PhysicalExam, PhysicalExamService } from './../physical-exam.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'patient-exams',
  templateUrl: './patient-exams.component.html',
  styleUrls: ['./patient-exams.component.scss']
})
export class PatientExamsComponent implements OnInit {
  exams$: Observable<PhysicalExam[]>;
  patientId: string;

  displayedColumns: string[] = ['date', 'temperatureCelcius', 'bloodPressureHg', 'action'];

  constructor(private route: ActivatedRoute, private examService: PhysicalExamService) {
    this.patientId = this.route.snapshot.paramMap.get('patientId');
  }

  ngOnInit() {
    if (this.patientId)
      this.exams$ = this.examService.getAll(this.patientId);
  }

}

