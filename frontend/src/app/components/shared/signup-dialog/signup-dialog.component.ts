import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthLoginReq } from 'src/app/api/models/auth-login-request.model';
import { AuthLoginResponse } from 'src/app/api/models/auth-login-response';
import { AuthSignupReq } from 'src/app/api/models/auth-signup-request.model';
import { AuthService } from 'src/app/api/services/auth.service';
import { StorageService } from 'src/app/api/services/storage.service';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {

  authMode: string = 'login';
  isLoggedin: boolean = false;
  authLoginReq = new AuthLoginReq;
  authSignupReq = new AuthSignupReq;
  
  signupForm: FormGroup;
  nameSignupControl = new FormControl('', Validators.required);
  emailSignupControl = new FormControl('', Validators.required);
  passwordSignupControl = new FormControl('', Validators.required);

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
      name: this.nameSignupControl,
      email: this.emailSignupControl,
      password: this.passwordSignupControl,
    });
    this.loginForm = formbuilder.group({
      email: this.emailLoginControl,
      password: this.passwordLoginControl,
    });
  }

  ngOnInit(): void {
  }

  onSignupSubmit(): void {
    console.log("onSignupSubmit");
    if(this.nameSignupControl.valid
      && this.emailSignupControl.valid 
      && this.passwordSignupControl.valid
    ) {
      this.authSignupReq.setName(this.nameSignupControl.value);
      this.authSignupReq.setEmail(this.emailSignupControl.value);
      this.authSignupReq.setPassword(this.passwordSignupControl.value);
      this.authService.signup(this.authSignupReq)
        .subscribe((data) => {
          if(data){
            this.storageService.setUser(data);
            this.closeDialog();
            window.location.reload();
          }
        });
    }
  }

  onLoginSubmit(): void {
    if(this.emailLoginControl.valid && this.passwordLoginControl.valid) {
      console.log("Submit login...");
      this.authLoginReq.setEmail(this.emailLoginControl.value);
      this.authLoginReq.setPassword(this.passwordLoginControl.value);
      this.authService.login(this.authLoginReq)
        .subscribe((data) => {
          if(data){
            this.storageService.setUser(data);
            this.closeDialog();
            window.location.reload();
          }
        });
    }
  }

  getErrorMessage() {
    if (this.nameSignupControl.hasError('required')) {
      return 'You must enter a value!';
    }
    return '';
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  setAuthMode(authMode: string): void {
    this.authMode = authMode;
  }
  
}
