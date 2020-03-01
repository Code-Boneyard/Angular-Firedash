import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'client-trending-documents',
  templateUrl: './trending-documents.component.html',
  styleUrls: ['./trending-documents.component.css']
})
export class TrendingDocumentsComponent implements OnInit {


// Configure Material Data Table:
trendingDocuments: MatTableDataSource<any>;
displayedColumns = [
  'docName',

];

@ViewChild(MatSort, { static: false }) sort: MatSort;

constructor(private afs: AngularFirestore, public dialog: MatDialog) {}

ngOnInit() {
  // Step 1: Make a Reference to Data in Firestore:
  // 1a: Invoke the 'afs' Property
  this.afs
    // 1b: Point to collection
    .collection<any>('documents')
    // 1c: Request an Observable with valueChanges()
    .valueChanges()
    // 1d: Subscribe to that Observable...
    .subscribe(data => {
      // 1e: ...and Pass that Data to the Material Data Table
      this.trendingDocuments = new MatTableDataSource(data);
      this.trendingDocuments.sort = this.sort;
    });
}

// Use the filter
applyFilter(filterValue: string) {
  filterValue = filterValue.trim();
  filterValue = filterValue.toLowerCase();
  this.trendingDocuments.filter = filterValue;
}

}

