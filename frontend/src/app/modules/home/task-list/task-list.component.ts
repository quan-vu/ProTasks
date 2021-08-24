import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

// services, models, ..
import { TaskService } from 'src/app/api/services/task.service';
import { SearchTaskReq } from 'src/app/api/models/task-search-request.model';
import { ITask } from 'src/app/api/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  tasks: Array<ITask> = [];
  searchTaskReq = new SearchTaskReq;

  constructor(
    fb: FormBuilder,
    public dialog: MatDialog,
    private taskService: TaskService,
  ) {
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks(this.searchTaskReq)
      .subscribe((tasks) => {
        this.tasks = tasks;
      });
  }

}
