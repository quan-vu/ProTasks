import { Component, Input, OnInit } from '@angular/core';

// services, models, ..
import { ITask } from 'src/app/api/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  @Input() tasks: Array<ITask> = [];

  constructor() {}

  ngOnInit(): void {
    
  }

}
