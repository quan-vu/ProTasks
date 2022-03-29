import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProject, Project } from 'src/app/api/models/project.model';
import { APIS } from './constants';
import { SearchProjectReq } from 'src/app/api/models/project-search-request.model';
import { ApiResponse } from 'src/app/api/models/api-response.model';

@Injectable()
export class ProjectService {

  constructor(
    private http: HttpClient,
    
  ) {
  }

  getProjects(filter: SearchProjectReq): Observable<IProject[]> {
    const url = `${APIS.TASK_LIST}${filter.toQuery()}`;
    return this.http.get<ApiResponse>(url)
      .pipe(
        // tap((response: ApiResponse) => console.log(response)),
        map((response: ApiResponse) => {
          return response.data.map((item: Project) => {
            return new Project(item);
          });
        })
      );
  }
}