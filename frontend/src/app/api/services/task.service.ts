import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITask, Task } from 'src/app/api/models/task.model';
import { APIS } from './constants';
import { SearchTaskReq } from 'src/app/api/models/task-search-request.model';
import { ApiResponse } from 'src/app/api/models/api-response.model';

@Injectable()
export class TaskService {

  constructor(
    private http: HttpClient,
    
  ) {
  }

  getTasks(filter: SearchTaskReq): Observable<Task[]> {
    const url = `${APIS.NOTE_LIST}${filter.toQuery()}`;
    return this.http.get<ApiResponse>(url)
      .pipe(
        // tap((response: ApiResponse) => console.log(response)),
        map((response: ApiResponse) => {
          return response.data.map((item: Task) => {
            return new Task(item);
          });
        })
      );
  }
}