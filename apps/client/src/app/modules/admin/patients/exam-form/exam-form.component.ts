import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhysicalExam, PhysicalExamService } from './../physical-exam.service';
import { take } from 'rxjs/operators';


@Component({
  selector: 'exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.scss']
})
export class ExamFormComponent implements OnInit {
  physicalExam: PhysicalExam = new PhysicalExam();
  patientId: string;
  id: string;

  constructor(
    private examService: PhysicalExamService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.patientId = this.route.snapshot.paramMap.get('patientId');
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    if (this.id)
      this.examService.get(this.patientId, this.id)
        .pipe(take(1))
        .subscribe((s: Object) => {
          if (s) {
            let date = (<firebase.firestore.Timestamp>s['date']).toDate();
            this.physicalExam = <PhysicalExam>s;
            this.physicalExam.date = date;

          }
          else this.physicalExam = new PhysicalExam();
        });
  }

  save(PhysicalExam: PhysicalExam) {
    if (this.id) {
      this.examService.update(this.patientId, this.physicalExam.id, PhysicalExam);
    }
    else
      this.examService.create(this.patientId, PhysicalExam);

    this.router.navigate(['/auth/modules/admin/patients/' + this.patientId + '/exams']);
  }

  delete() {
    if (!confirm('Are you Sure?')) return;

    this.examService.delete(this.patientId, this.id);
    this.router.navigate(['/auth/modules/admin/patients/' + this.patientId + '/exams']);
  }
}


