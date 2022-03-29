import { Component, OnInit } from '@angular/core';
import { SearchTaskReq } from 'src/app/api/models/task-search-request.model';
import { ITask } from 'src/app/api/models/task.model';
import { TaskService } from 'src/app/api/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks: Array<ITask> = [];
  searchTaskReq = new SearchTaskReq;
  
  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks(this.searchTaskReq)
      .subscribe((tasks) => {
        this.tasks = tasks;
      });
  }

  onAddedTask(addedTask: boolean): void {
    if (addedTask) {
      this.getTasks();
    }
  }

}
