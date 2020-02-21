import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})

export class TaskDetailComponent {
  constructor(private afs: AngularFirestore) {}
}

