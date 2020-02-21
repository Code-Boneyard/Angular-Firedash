import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  editTask: FormGroup;
  updateTask: FormGroup;
  newTask: FormGroup;

  constructor(
    private afs: AngularFirestore,
    private router: Router
    ) {}

  ngOnInit() {}

}
