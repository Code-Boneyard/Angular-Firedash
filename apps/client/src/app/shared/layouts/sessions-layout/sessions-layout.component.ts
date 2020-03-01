import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './../../../../app/core/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'client-sessions-layout',
  templateUrl: './sessions-layout.component.html',
  styleUrls: ['./sessions-layout.component.scss']
})

export class SessionsLayoutComponent {
  email: string;
  password: string;

  constructor(public AuthService: AuthService) { }



}
