import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { EditSubscriptionComponent } from './components/edit-subscription/edit-subscription.component';
import { NewSubscriptionComponent } from './components/new-subscription/new-subscription.component';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  // Configure Material Data Table:
  activeSubscriptions: MatTableDataSource<any>;
  displayedColumns = [
    'name',
    'type',
    'tenants',
    'isActive',
    'createdDate',
    'actions'
  ];

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {}

  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collection<any>('subscriptions')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.activeSubscriptions = new MatTableDataSource(data);
        this.activeSubscriptions.sort = this.sort;
      });
  }

  // Use the filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.activeSubscriptions.filter = filterValue;
  }

  // Open the EditTaskComponent
  editTask(): void {
    const dialogRef = this.dialog.open(EditSubscriptionComponent, {
      width: '350px',
      height: '550px',
    });
  }

  newTask(): void {
    const dialogRef = this.dialog.open(NewSubscriptionComponent, {
      width: '350px',
      height: '650px',
    });
  }
}