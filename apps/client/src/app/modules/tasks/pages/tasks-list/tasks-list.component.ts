import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { EditTaskComponent } from '../../modals/edit-task/edit-task.component';
import { NewTaskComponent } from '../../modals/new-task/new-task.component';
import { Task } from './../../models/task.model'
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})

export class TasksListComponent implements OnInit {
  // Configure Material Data Table:
  userDoc: AngularFirestoreDocument;
  dataSource: MatTableDataSource<any>;
  displayedColumns = [
    'description',
    'dueDate',
    'effort',
    'priority',
    'status',
    'actions'
  ];

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private afs: AngularFirestore,
    public dialog: MatDialog) {}


  ngOnInit() {
    this.afs
      .collection<any>('tasks').valueChanges()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      });
  }


  // Use the filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  // Open the EditTaskComponent
  editTask(data): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '350px',
      height: '550px',
      data: data
    });
  }

  trackByUid(index, item) {
    return item.uid;
  }
}
