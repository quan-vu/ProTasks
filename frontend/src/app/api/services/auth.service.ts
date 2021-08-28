import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IAuth, Auth } from 'src/app/api/models/auth.model';
import { APIS } from './constants';
import { AuthLoginReq } from 'src/app/api/models/auth-login-request.model';
import { ApiResponse } from 'src/app/api/models/api-response.model';
import { AuthLoginResponse } from '../models/auth-login-response';
import { AuthSignupReq } from '../models/auth-signup-request.model';
import { AuthSignupResponse } from '../models/auth-signup-response';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    
  ) {
  }

  signup(params: AuthSignupReq): Observable<AuthSignupResponse>{
    const url = APIS.AUTH_SIGNUP;
    return this.http.post<ApiResponse>(url, params).pipe(
      tap(
        error => console.error(error)
      ),
      map((response: ApiResponse) => {
        return new AuthSignupResponse(response.data);
      })
    );
  }

  login(params: AuthLoginReq): Observable<AuthLoginResponse>{
    const url = APIS.AUTH_LOGIN;
    return this.http.post<ApiResponse>(url, params).pipe(
      tap(
        error => console.error(error)
      ),
      map((response: ApiResponse) => {
        return new AuthSignupResponse(response.data);
      })
    );
  }
}