import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './../../../../app/core/auth/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { MatSort, MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { NewTaskComponent } from './../../../../app/modules/tasks/modals/new-task/new-task.component';


@Component({
  selector: 'client-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})


export class AuthLayoutComponent {
  activeTasks: MatTableDataSource<any>;
  panelOpenState: boolean;
  email: string;
  password: string;

  @ViewChild(MatSort, { static: false }) sort: MatSort;


  constructor(public AuthService: AuthService, private afs: AngularFirestore, public dialog: MatDialog) {}

  signOut() {
    this.AuthService.signOut();
  }

}


