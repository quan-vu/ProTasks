import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IAuth, Auth } from 'src/app/api/models/auth.model';
import { APIS } from './constants';
import { AuthLoginReq } from 'src/app/api/models/auth-login-request.model';
import { ApiResponse } from 'src/app/api/models/api-response.model';
import { AuthLoginResponse } from '../models/auth-login-response';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    
  ) {
  }

  login(params: AuthLoginReq): Observable<ApiResponse>{
    const url = APIS.AUTH_LOGIN;
    return this.http.post<ApiResponse>(url, params).pipe(
      tap( // Log the result or error
        response => new AuthLoginResponse(response),
        error => console.error(error)
      ),
    );
  }
}