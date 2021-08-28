import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

// Material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';

// components
import { HomeComponent } from './home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FormAddTaskComponent } from 'src/app/components/shared/form-add-task/form-add-task.component';

@NgModule({
  declarations: [
    HomeComponent,
    TaskListComponent,
    ProjectListComponent,
    FormAddTaskComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
  ]
})
export class HomeModule { }
