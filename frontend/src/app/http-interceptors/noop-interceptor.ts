import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { StorageService } from '../api/services/storage.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor(
    private storageService: StorageService
  ){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ACCESS_TOKEN = this.storageService.getAccessToken();
    const BEARER_TOKEN = 'Bearer ' + ACCESS_TOKEN;
    return next.handle(req.clone({ setHeaders: {
        'Authorization': BEARER_TOKEN
    } }))
    // return next.handle(req);
  }
}