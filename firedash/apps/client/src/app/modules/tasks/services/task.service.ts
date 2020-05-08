import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from './../../../../app/modules/tasks/models/task.model';

@Injectable()
export class TaskService {
  constructor(private db: AngularFirestore) { }


  getTasks() {
    return this.db.collection('tasks').snapshotChanges();
  }

  createTask(task: Task){
    return this.db.collection('tasks').add(task);
  }
  updateTask(task: Task){
    delete task.taskId;
    this.db.doc('tasks/' + task.taskId).update(task);
  }

  deleteTask(taskId: string){
    this.db.doc('tasks/' + taskId).delete();
  }
}
