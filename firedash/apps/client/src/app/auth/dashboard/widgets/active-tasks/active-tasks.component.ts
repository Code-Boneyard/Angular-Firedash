import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'client-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.css']
})
export class ActiveTasksComponent  {
  title = 'Tasks by Status';
  type = 'PieChart';
  data = [
     ['Completed', 45.0],
     ['Pending', 26.8],
     ['Waiting', 12.8],
     ['Delayed', 8.5],
     ['Ongoing', 6.2],
     ['Others', 0.7]
  ];
  columnNames = ['Status', 'Percentage'];
  options = {
  };
  width = 550;
  height = 400;





// Configure Material Data Table:
activeTasks: MatTableDataSource<any>;
displayedColumns = [
  'description',

];

@ViewChild(MatSort, { static: false }) sort: MatSort;

constructor(private afs: AngularFirestore, public dialog: MatDialog) {}

ngOnInit() {
  // Step 1: Make a Reference to Data in Firestore:
  // 1a: Invoke the 'afs' Property
  this.afs
    // 1b: Point to collection
    .collection<any>('tasks')
    // 1c: Request an Observable with valueChanges()
    .valueChanges()
    // 1d: Subscribe to that Observable...
    .subscribe(data => {
      // 1e: ...and Pass that Data to the Material Data Table
      this.activeTasks = new MatTableDataSource(data);
      this.activeTasks.sort = this.sort;
    });
}

// Use the filter
applyFilter(filterValue: string) {
  filterValue = filterValue.trim();
  filterValue = filterValue.toLowerCase();
  this.activeTasks.filter = filterValue;
}

}
