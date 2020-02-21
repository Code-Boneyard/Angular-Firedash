import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatDialog } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/firestore';

interface Task {
  uid?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  emailVerified?: string;
  isActive?: string;
}

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class APIsComponent implements OnInit {

  // Configure Material Data Table:
  activeAPIs: MatTableDataSource<any>;
  displayedColumns = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'emailVerified',
    'actions'
  ];

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {}

  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collection<any>('apis')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.activeAPIs = new MatTableDataSource(data);
        this.activeAPIs.sort = this.sort;
      });
  }

  // Use the filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.activeAPIs.filter = filterValue;
  }


}