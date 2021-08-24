import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

// App 
import { IProject, Project } from 'src/app/api/models/project.model';
import { ProjectService } from 'src/app/api/services/project.service';
import { SearchProjectReq } from 'src/app/api/models/project-search-request.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit {

  projects: Array<IProject> = [];
  searchProjectReq = new SearchProjectReq;

  constructor(
    private projectService: ProjectService,
  ) {
    this.projects = [
      {
        id: '1111',
        name: 'ProTask',
      },
      {
        id: '2222',
        name: 'SimChat',
      },
    ];
  }

  ngOnInit(): void {
    // this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects(this.searchProjectReq)
      .subscribe((projects) => {
        this.projects = [...projects];
      });
  }

}
