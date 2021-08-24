import { NgModule } from '@angular/core';
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

// application modules
import { HomeModule } from './modules/home/home.module';
import { HttpErrorHandler } from 'src/app/api/services/http-error-handler.service';

// services
import { TaskService } from 'src/app/api/services/task.service';
import { ProjectService } from 'src/app/api/services/project.service';
import { MessageService } from 'src/app/api/services/message.service';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
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
  ],
  providers: [
    httpInterceptorProviders,
    HttpErrorHandler,
    MessageService,
    TaskService,
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
