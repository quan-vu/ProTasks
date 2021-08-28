import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { TaskCreateReq } from 'src/app/api/models/task-create-request.model';
import { TaskService } from 'src/app/api/services/task.service';

@Component({
  selector: 'app-form-add-task',
  templateUrl: './form-add-task.component.html',
  styleUrls: ['./form-add-task.component.scss']
})
export class FormAddTaskComponent implements OnInit {

  @Output() addedTask = new EventEmitter<boolean>();

  formAddTask: FormGroup;
  contentControl = new FormControl('', Validators.required);
  taskCreateReq = new TaskCreateReq

  constructor(
    formbuilder: FormBuilder,
    private taskService: TaskService,
  ) {
    this.formAddTask = formbuilder.group({
      content: this.contentControl,
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("submiting...");
    if(this.contentControl.valid) {
      console.log("submiting...");
      this.taskCreateReq.setContent(this.contentControl.value);
      this.taskService.create(this.taskCreateReq)
        .subscribe(task => {
          this.emitAddedTask();
          console.log(task);
        });
    }
  }

  getErrorMessage() {
    if (this.contentControl.hasError('required')) {
      return 'You must enter a value!';
    }
    return '';
  }

  emitAddedTask() {
    console.log("emitAddedTask");
    this.addedTask.emit(true);
  }

}
