
import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Task } from 'src/app/modules/tasks/models/task.model';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  // Generate Form Controls
  editTask: FormGroup;

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private fb: FormBuilder
  ) {}


  ngOnInit() {
    this.editTask = this.fb.group({
      description: '',
      dueDate: '',
      effort: '',
      priority: '',
      status: '',
      actions: ''
    })
    this.editTask.valueChanges.subscribe(console.log)
  }




}
