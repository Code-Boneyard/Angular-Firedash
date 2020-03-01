import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatDialog,  } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/firestore';

import { User } from './../../../shared/models/user.model';


@Component({
  selector: 'client-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // Configure Material Data Table:
  displayedColumns = [ 'firstName', 'lastName', 'email', 'isActive', 'emailVerified', 'actions' ];
  tableDataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog ) {}

  ngOnInit() {
    this.afs.collection<any>('users').valueChanges()
      .subscribe(data => {
        this.tableDataSource = new MatTableDataSource(data);
        this.tableDataSource.sort = this.sort;
      });
  }

  // Use the filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.tableDataSource.filter = filterValue;
  }

  // The trackByUid method is optional, but it will prevent the view from re-rendering every row when data changes.
  // If you have a very large data table, trackBy can provide a significant boost in rendering performance.


}
