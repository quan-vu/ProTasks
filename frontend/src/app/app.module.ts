import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// common modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatIconModule } from '@angular/material/icon';

// App component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SignupDialogComponent } from 'src/app/components/shared/signup-dialog/signup-dialog.component';

// application modules
import { HomeModule } from './modules/home/home.module';
import { HttpErrorHandler } from 'src/app/api/services/http-error-handler.service';

// services
import { TaskService } from 'src/app/api/services/task.service';
import { ProjectService } from 'src/app/api/services/project.service';
import { MessageService } from 'src/app/api/services/message.service';
import { httpInterceptorProviders } from './http-interceptors';
import { AuthService } from './api/services/auth.service';
import { StorageService } from './api/services/storage.service';

// Material
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupDialogComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, 
    // Material
    MatIconModule,
    // Application
    HomeModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [
    httpInterceptorProviders,
    HttpErrorHandler,
    MessageService,
    TaskService,
    ProjectService,
    AuthService,
    StorageService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
