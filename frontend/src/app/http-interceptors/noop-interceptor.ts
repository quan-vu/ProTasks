import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MTUyNzcsInVzZXJfaWQiOiIxYzliYjkxMS0wMzMyLTExZWMtOGIwZS0wODYyNjY1MjkwZTYifQ.Ul3zE6KCgXj3GX7BSIAodghXQoefYtEV7FRqqHG80qA';
    const BEARER_TOKEN = 'Bearer ' + ACCESS_TOKEN;
    return next.handle(req.clone({ setHeaders: {
        'Authorization': BEARER_TOKEN
    } }))
    // return next.handle(req);
  }
}