import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatDialog,  } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/firestore';
import { NewTeamComponent } from './new-team/new-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';

@Component({
  selector: 'client-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  // Configure Material Data Table:
  displayedColumns = [ 'teamName', 'isActive', 'lastModified', 'actions' ];
  tableDataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog ) {}

  ngOnInit() {
    this.afs.collection<any>('teams').valueChanges()
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
  editTeam(): void {
    const dialogRef = this.dialog.open(EditTeamComponent, {
      width: '350px',
      height: '550px',
    });
  }

  newTeam(): void {
    const dialogRef = this.dialog.open(NewTeamComponent, {

    });
  }

}

