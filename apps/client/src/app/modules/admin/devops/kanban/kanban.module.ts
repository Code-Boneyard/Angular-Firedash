import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../../../app/shared/shared.module';

import { KanbanRoutingModule } from './kanban-routing.module';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';

import { BoardService } from './board.service';

import { BoardsListComponent } from './boards-list/boards-list.component';
import { BoardComponent } from './board/board.component';
import { BoardDialogComponent } from './dialogs/board-dialog.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TaskDialogComponent } from './dialogs/task-dialog.component';
import { ShellComponent } from './../../../../../app/shared/utils/shell/shell.component';
import { DeleteButtonComponent } from './../../../../../app/shared/utils/delete-button/delete-button.component';


@NgModule({
  declarations: [
    BoardsListComponent,
    BoardComponent,
    BoardDialogComponent,
    TaskDialogComponent,
    ShellComponent,
    DeleteButtonComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    KanbanRoutingModule,
    DragDropModule,
    MatButtonToggleModule,
  ],

  entryComponents: [
    BoardDialogComponent,
    TaskDialogComponent
  ],

  providers: [
    BoardService
  ]
})
export class KanbanModule {}
