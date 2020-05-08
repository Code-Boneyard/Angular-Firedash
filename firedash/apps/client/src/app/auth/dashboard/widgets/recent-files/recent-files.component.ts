import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'client-recent-files',
  templateUrl: './recent-files.component.html',
  styleUrls: ['./recent-files.component.css']
})
export class RecentFilesComponent implements OnInit {

// Configure Material Data Table:
activeProjects: MatTableDataSource<any>;
displayedColumns = [
  'projectName',
  'status',
  'city',
];

@ViewChild(MatSort, { static: false }) sort: MatSort;

constructor(private afs: AngularFirestore, public dialog: MatDialog) {}

ngOnInit() {
  // Step 1: Make a Reference to Data in Firestore:
  // 1a: Invoke the 'afs' Property
  this.afs
    // 1b: Point to collection
    .collection<any>('projects')
    // 1c: Request an Observable with valueChanges()
    .valueChanges()
    // 1d: Subscribe to that Observable...
    .subscribe(data => {
      // 1e: ...and Pass that Data to the Material Data Table
      this.activeProjects = new MatTableDataSource(data);
      this.activeProjects.sort = this.sort;
    });
}

// Use the filter
applyFilter(filterValue: string) {
  filterValue = filterValue.trim();
  filterValue = filterValue.toLowerCase();
  this.activeProjects.filter = filterValue;
}

}
