
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { PatientRoutes } from './patient.routes';
import { PatientService } from './patient.service';
import { PatientComponent } from './patient.component';
import { PhysicalExamService } from './physical-exam.service';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { ExamFormComponent } from './exam-form/exam-form.component';
import { PatientExamsComponent } from './patient-exams/patient-exams.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PatientRoutes
  ],
  declarations: [
    PatientComponent,
    PatientFormComponent,
    PatientExamsComponent,
    ExamFormComponent,

  ],
  providers: [
      PatientService,
      PhysicalExamService
  ]
})

export class PatientModule { }
