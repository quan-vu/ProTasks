import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthLoginReq } from 'src/app/api/models/auth-login-request.model';
import { AuthLoginResponse } from 'src/app/api/models/auth-login-response';
import { AuthService } from 'src/app/api/services/auth.service';
import { StorageService } from 'src/app/api/services/storage.service';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {

  isLogin: boolean = true;
  authLoginReq = new AuthLoginReq;
  
  signupForm: FormGroup;
  nameControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);

  loginForm: FormGroup;
  emailLoginControl = new FormControl('', Validators.required);
  passwordLoginControl = new FormControl('', Validators.required);

  constructor(
    formbuilder: FormBuilder,
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    private authService: AuthService,
    private storageService: StorageService,
  ) {
    this.signupForm = formbuilder.group({
      name: this.nameControl,
      email: this.emailControl,
      password: this.passwordControl,
    });
    this.loginForm = formbuilder.group({
      email: this.emailLoginControl,
      password: this.passwordLoginControl,
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

  onLoginSubmit(): void {
    if(this.emailLoginControl.valid && this.passwordLoginControl.valid) {
      console.log("Submit login...");
      this.authLoginReq.setEmail(this.emailLoginControl.value);
      this.authLoginReq.setPassword(this.passwordLoginControl.value);
      this.authService.login(this.authLoginReq)
        .subscribe((response) => {
          if(response.data){
            let data = new AuthLoginResponse(response.data);
            this.storageService.setUser(data);
            this.closeDialog();
          }
        });
    }
  }

  getErrorMessage() {
    if (this.nameControl.hasError('required')) {
      return 'You must enter a value!';
    }
    return '';
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }


}
