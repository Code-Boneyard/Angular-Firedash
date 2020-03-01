import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatDialog,  } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/firestore';
import { EditRoleComponent } from './components/edit-role/edit-role.component';
import { NewRoleComponent } from './components/new-role/new-role.component';

@Component({
  selector: 'client-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  // Configure Material Data Table:
  displayedColumns = [ 'name', 'seats', 'lastModified', 'actions' ];
  tableDataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog ) {}

  ngOnInit() {
    this.afs.collection<any>('roles').valueChanges()
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
  // Open the EditTaskComponent
  editRole(): void {
    const dialogRef = this.dialog.open(EditRoleComponent, {
      width: '350px',
      height: '550px',
    });
  }

  newRole(): void {
    const dialogRef = this.dialog.open(NewRoleComponent, {

    });
  }

}

