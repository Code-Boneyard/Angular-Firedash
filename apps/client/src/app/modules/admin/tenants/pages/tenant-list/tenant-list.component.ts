import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSort, MatDialog } from '@angular/material';
import { EditTenantComponent } from '../../components/edit-tenant/edit-tenant.component';
import { NewTenantComponent } from '../../components/new-tenant/new-tenant.component';

interface Tenants {
  id?: string;
  name?: string;
  isActive?: string;
  subscription?: string;
}

@Component({
  selector: 'client-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss']
})

export class TenantListComponent implements OnInit {


  // Configure Material Data Table:
  activeTenants: MatTableDataSource <any>;
  displayedColumns = [
    'id',
    'name',
    'isActive',
    'subscription',
    'actions'
  ];

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {}

  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collection<any>('tenants')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.activeTenants = new MatTableDataSource(data);
        this.activeTenants.sort = this.sort;
      });
  }

  // Use the filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.activeTenants.filter = filterValue;
  }

  // Open the EditTaskComponent
  editTenant(): void {
    const dialogRef = this.dialog.open(EditTenantComponent, {
      width: '350px',
      height: '550px',
    });
  }

  newTenant(): void {
    const dialogRef = this.dialog.open(NewTenantComponent, {

    });
  }
}
