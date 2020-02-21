import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


export interface FilesModel {
  name: string;
  modified: string;
  team: string;
}
const ELEMENT_DATA: FilesModel[] = [
  {name: 'BP-02 100% CD MEPS Report', modified: 'Jan 13th, 2020', team: 'SFO Terminal 3 West Modernization'},
  {name: 'BP-02 500% CD MEPS Report', modified: 'Jan 5th, 2020', team: 'SFO Terminal 3 West Modernization'},
  {name: 'TCCo 100% CD MEPS Report', modified: 'Dec 8th, 2019', team: 'SFO Terminal 3 West Modernization'},
];

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})

export class FilesComponent {
  public files: NgxFileDropEntry[] = [];
  displayedColumns: string[] = ['select', 'name', 'modified', 'team'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<FilesModel>(true, []);

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}

/** The label for the checkbox on the passed row */
checkboxLabel(row?: FilesModel): string {
  if (!row) {
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
}


  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}

